import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { Add_new_user, get_all_players } from "../../API/user-api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { registerUser } from "../../features/userSlice";

const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')

  const [players, setPlayers] = useState([])


  useEffect(() => {
    const players = async() => {
      const get_players = await get_all_players()
      console.log(get_players)
      setPlayers(get_players)


    }
    players()

  }, [])

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleEnterTheGame = async() => {
    try {
      if(name){
        const adding = await Add_new_user(name)
        if(adding) {
          dispatch(registerUser(adding))
          const data = JSON.stringify(adding)
          localStorage.setItem('user', data)
          navigate('/home')
        }

      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Box
      sx={{
        width: '100vw', 
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column',
          gap: 10,
          border: '2px solid black',
          borderRadius: 15,
          width: "400px",
          height: "400px",
        }}
      >
        <TextField value={name} placeholder="Enter your name" onChange={handleName} />

        <Button onClick={() => handleEnterTheGame()}>Enter the game</Button>

        <Box >
          <Typography fontSize={20}>The active players: </Typography>
          {players.map((name, id) => 
            <Box key={id}>
              <Typography>{name}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
