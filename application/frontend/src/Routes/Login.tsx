import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../Stores/UserStore";
import { getUserId, login } from "../utils/auth";
import jwt_decode from "jwt-decode";

const Login = () => {
  const setToken = useUserStore((state) => state.setToken);
  const setLoggedIn = useUserStore((state) => state.setLoggedIn);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (inputs: any) => {
    login(inputs)
      .then((res) => setToken(res?.data.token))
      .then(() => setLoggedIn())
      .then(() => navigate("/match"));
  };

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
          <Button variant="contained" onClick={() => handleSubmit(inputs)}>
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
