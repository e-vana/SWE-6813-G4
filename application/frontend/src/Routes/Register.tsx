import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box minHeight="100vh" p={2} sx={{ backgroundColor: "background.default" }}>
      <Box>
        <Stack m="auto" spacing={3} justifyContent="center" maxWidth="sm">
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Register
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
          <TextField
            size="small"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
