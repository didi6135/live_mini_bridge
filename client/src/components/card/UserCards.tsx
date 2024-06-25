import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";

const UserCards = () => {

  
  const user = useAppSelector((state) => state.user.user);
  return (
    <>
      {/* {user && ( */}
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: 7,
            borderWidth: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          height={150}
          width={500}
        >
          <Typography>{user?.name}</Typography>
        </Box>
      {/* )} */}
    </>
  );
};

export default UserCards;
