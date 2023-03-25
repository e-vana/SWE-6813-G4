import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";

const Landing = () => {
  const signIn = () => {
    console.log("button clicked");
  };
  return (
    <Box
      bgcolor="#000000"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box minHeight="100vh" bgcolor="#00000080">
        <Box p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#ffffff" variant="h5">
              MatchMate
            </Typography>
            <Button variant="contained" component={Link} to={`login`}>
              Login
            </Button>
          </Box>
          <Box
            my={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography color="#ffffff" align="center" variant="h2">
              Find your squad for any game you're playing
            </Typography>
            <Stack spacing={2} my={5} justifyContent="center">
              <Typography color="#ffffff" align="center" variant="h5">
                How it works:
              </Typography>
              <Typography color="#ffffff" align="center" variant="h6">
                1. Sign in or create your account
              </Typography>
              <Typography color="#ffffff" align="center" variant="h6">
                2. Answer a few simple questions
              </Typography>
              <Typography color="#ffffff" align="center" variant="h6">
                3. Match with other players
              </Typography>
              <Typography color="#ffffff" align="center" variant="h6">
                4. Play
              </Typography>
            </Stack>
            <Button variant="contained" component={Link} to={`register`}>
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
