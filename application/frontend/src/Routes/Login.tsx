import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box minHeight="100vh" p={2} sx={{ backgroundColor: "background.default" }}>
      <Box>
        <Stack m="auto" spacing={3} justifyContent="center" maxWidth="sm">
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Login
          </Typography>
          <TextField
            size="small"
            label="Email Address"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button variant="contained">Login</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
