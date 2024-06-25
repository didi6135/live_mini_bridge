import { Box, Button, Grid, Typography } from "@mui/material";
import { useSockets } from "../context/socketContext";
import UserCards from "./card/UserCards";
import CardDeck from "./card/CardDeck";

const HomePage = () => {
  // const socket = useSockets()


  const handleStartGame = () => {
    
  }

  return (
    <>
      <Box width={"95vw"} height={"95vh"} 
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto auto auto'
      }}
      >
        <Box>
          <Typography textAlign={'center'} fontSize={35}>Home page</Typography>
          <Button onClick={handleStartGame}>Start Game</Button>
          </Box>

          <Box>
          <CardDeck />
          
          </Box>

          <Box sx={{
            
            display:'flex',
            alignItems:'center',
            justifyContent: 'center'
          }}>
            <UserCards />
          </Box>
      </Box>
    </>
  );
};

export default HomePage;
