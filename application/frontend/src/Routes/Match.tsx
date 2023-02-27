import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useState } from "react";
import { useUserStore } from "../Stores/UserStore";

interface Token {
  id: number;
  iat: number;
}

const Match = () => {
  const token = useUserStore((state) => state.token);
  const { id } = jwtDecode<Token>(token);
  console.log(id);
  const [vibe, setVibe] = useState("");
  const [content, setContent] = useState("");
  const handleVibeChange = (event: any) => {
    setVibe(event?.target.value);
  };
  const handleContentChange = (event: any) => {
    setContent(event?.target.value);
  };
  return (
    <Box minHeight="100vh" p={2} sx={{ backgroundColor: "background.default" }}>
      <Box>
        <Avatar />
      </Box>
      <Stack mx="auto" my={4} spacing={1} justifyContent="center" maxWidth="sm">
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Select A Game
        </Typography>
        <TextField select label="Select Game" variant="outlined" fullWidth />
      </Stack>
      <Stack mx="auto" my={4} spacing={4} justifyContent="center" maxWidth="sm">
        <Stack>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Vibe
          </Typography>
          <FormControl variant="standard">
            {/* <FormLabel>Vibe</FormLabel> */}
            <RadioGroup row value={vibe}>
              <FormControlLabel
                value="1"
                control={<Radio size="small" />}
                label="Chill"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value="2"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value="3"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value="4"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value="5"
                control={<Radio size="small" />}
                label="Tryhard"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleVibeChange}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Content
          </Typography>
          <FormControl variant="standard">
            {/* <FormLabel>Content</FormLabel> */}
            <RadioGroup row value={content}>
              <FormControlLabel
                value="1"
                control={<Radio size="small" />}
                label="Clean"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleContentChange}
              />
              <FormControlLabel
                value="2"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value="3"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value="4"
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value="5"
                control={<Radio size="small" />}
                label="No Filter"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleContentChange}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button variant="contained">Find Me A Game</Button>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Friends
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Badge
              color="error"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
            >
              <Avatar />
            </Badge>
            <Stack>
              <Typography sx={{ color: "text.primary" }}>Evan#88765</Typography>
              <Typography variant="caption" sx={{ color: "text.primary" }}>
                Offline
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Badge
              color="success"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
            >
              <Avatar />
            </Badge>
            <Stack>
              <Typography sx={{ color: "text.primary" }}>
                Fredy#67663
              </Typography>
              <Typography variant="caption" sx={{ color: "text.primary" }}>
                Online
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Badge
              color="primary"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
            >
              <Avatar />
            </Badge>
            <Stack>
              <Typography sx={{ color: "text.primary" }}>
                Jordan#32453
              </Typography>
              <Typography variant="caption" sx={{ color: "text.primary" }}>
                Playing Call of Duty
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Badge
              color="error"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              overlap="circular"
            >
              <Avatar />
            </Badge>
            <Stack>
              <Typography sx={{ color: "text.primary" }}>John#00243</Typography>
              <Typography variant="caption" sx={{ color: "text.primary" }}>
                Offline
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Match;
