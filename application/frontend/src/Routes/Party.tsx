import { Box, Typography } from "@mui/material";
import { useUserStore } from "../Stores/UserStore";

const Party = () => {
  const game = useUserStore((state) => state.currentGame);
  return (
    <Box>
      <Typography>Playing {game}</Typography>
    </Box>
  );
};

export default Party;
