import { Addchart, Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  CircularProgress
} from "@mui/material";
import jwtDecode from "jwt-decode";
// import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../Stores/UserStore";
import { getGames } from "../utils/games";
import { changeStatus } from "../utils/user";
import { io } from "socket.io-client";

interface Token {
  id: number;
  iat: number;
}
const socket = io("http://localhost:3005", {query: {token: token}});

const Match = () => {
  const { data: games, isLoading } = useQuery("getGames", getGames, {
    // refetchOnMount: true,
  });
  const token = useUserStore((state) => state.token);
  const { id } = jwtDecode<Token>(token);
  const [game, setGame] = useState("");
  const [vibe, setVibe] = useState(0);
  const [content, setContent] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleVibeChange = (event: any) => {
    setVibe(event?.target.value);
  };
  const handleContentChange = (event: any) => {
    setContent(event?.target.value);
  };
  const setCurrentGame = useUserStore((state) => state.setCurrentGame);
  const setCurrentVibe = useUserStore((state) => state.setVibe);
  const setCurrentContent = useUserStore((state) => state.setContent);
  const setStatus = useUserStore((state) => state.setStatus);
  const reset = useUserStore((state) => state.reset);
  const navigate = useNavigate();

  //matchmaking logic
  const [isSearchingForGame, setIsSearchingForGame] = useState<boolean>(false);
  const [isConnectedToMatchMakingService, setIsConnectedToMatchMakingService] = useState<boolean>(false);
  const [playersInQueue, setPlayersInQueue] = useState<number>(0);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnectedToMatchMakingService(true);
      console.log("Connected!")
    });
    socket.on('disconnect', () => {
      setIsConnectedToMatchMakingService(false);
      console.log("Disconnected!")

    });
    socket.on("players-in-queue", (message) => {
      setPlayersInQueue(message.playersInQueue)
    })
    return () => {
      socket.off('connection');
      socket.off('disconnect');
    };
  }, [])
  const handleSubmit = () => {
    setCurrentGame(game);
    setCurrentVibe(vibe);
    setCurrentContent(content);
    setStatus(2);
    changeStatus(2);
    setIsSearchingForGame(true);
    //connect to socket 
    // navigate("/party");
  };
  const logout = () => {
    reset();
  };
  return (
    <Box minHeight="100vh" p={2} sx={{ backgroundColor: "background.default" }}>
      <Box>
        <Avatar onClick={handleClick} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to={`profile`} onClick={handleClose}>
          <Avatar />
          <Typography mx={1}>Profile</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Stack mx="auto" my={4} spacing={1} justifyContent="center" maxWidth="sm">
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Select A Game
        </Typography>
        {!isLoading && (
          <TextField
            select
            label="Select Game"
            variant="outlined"
            value={game}
            onChange={(event) => setGame(event.target.value)}
            fullWidth
          >
            {games.games.map((game: any) => (
              <MenuItem key={game.id} value={game.title}>
                {game.title}
              </MenuItem>
            ))}
          </TextField>
        )}
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
                value={1}
                control={<Radio size="small" />}
                label="Chill"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value={2}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value={3}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value={4}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleVibeChange}
              />
              <FormControlLabel
                value={5}
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
                value={1}
                control={<Radio size="small" />}
                label="Clean"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleContentChange}
              />
              <FormControlLabel
                value={2}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value={3}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value={4}
                control={<Radio size="small" />}
                label=""
                labelPlacement="bottom"
                onChange={handleContentChange}
              />
              <FormControlLabel
                value={5}
                control={<Radio size="small" />}
                label="No Filter"
                labelPlacement="bottom"
                sx={{ color: "text.primary" }}
                onChange={handleContentChange}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Button disabled={isSearchingForGame || !vibe || !content} variant="contained" onClick={handleSubmit}>
          {
            !isSearchingForGame && (
              <>Find me a Game</>
            )
          }
          {
            isSearchingForGame && (
              <><CircularProgress size={24} sx={{ color: "white"}}></CircularProgress></>
            )
          }
        </Button>
        {isSearchingForGame && (
        <Typography sx={{ color: "text.primary" }}>
        Finding a Match...
      </Typography>
        )}

        
          <Typography sx={{ color: "text.primary" }}>
          Players in Queue: {playersInQueue}
        </Typography>

        {/* <Stack spacing={2}>
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
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default Match;
