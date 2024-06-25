import { Box, Typography } from "@mui/material";

const CardDeck = () => {
  return (
    <>
      <Typography>The card deck</Typography>
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
      ></Box>
    </>
  );
};

export default CardDeck;
