import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { register } from "../utils/auth";

const Register = () => {
  const [passConfirmed, setPassConfirmed] = useState(false);
  const checkPass = (pass: string, confirm: string) => {
    pass === confirm
      ? setPassConfirmed(true)
      : console.log("passwords dont match");
  };
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (inputs: any) => {
    passConfirmed ? register(inputs) : console.log("passwords dont match");
  };
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
            onChange={(event) =>
              setInputs({ ...inputs, email: event.target.value })
            }
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={(event) =>
              setInputs({ ...inputs, password: event.target.value })
            }
          />
          <TextField
            size="small"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={(event) => {
              checkPass(inputs.password, event.target.value);
            }}
          />
          <Button variant="contained" onClick={() => handleSubmit(inputs)}>
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
