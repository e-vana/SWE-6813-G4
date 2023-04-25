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
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import jwtDecode from "jwt-decode";
// import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../Stores/UserStore";
import { getGames } from "../utils/games";
import {
  MatchMakingQueueInformation,
  cancelMatchMakingQueue,
  changeStatus,
  connectToMatchmakingQueue,
} from "../utils/user";
import { io } from "socket.io-client";

interface Token {
  id: number;
  iat: number;
}
interface MatchDetails {
  message: string;
  lobby_id: number;
  players: string[];
}

const Match = () => {
  const { data: games, isLoading } = useQuery("getGames", getGames, {
    // refetchOnMount: true,
  });

  const token = useUserStore((state) => state.token);
  const { id } = jwtDecode<Token>(token);
  const [game, setGame] = useState<number>(0);
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
    setVibe(parseInt(event?.target.value));
  };
  const handleContentChange = (event: any) => {
    setContent(parseInt(event?.target.value));
  };
  const setCurrentGame = useUserStore((state) => state.setCurrentGame);
  const setCurrentVibe = useUserStore((state) => state.setVibe);
  const setCurrentContent = useUserStore((state) => state.setContent);
  const setStatus = useUserStore((state) => state.setStatus);
  const reset = useUserStore((state) => state.reset);
  const navigate = useNavigate();

  //matchmaking logic
  const {
    mutateAsync: joinMatchmakingQueueAsync,
    isLoading: joinMatchmakingQueueIsLoading,
  } = useMutation("connectToMatchmakingQueue", connectToMatchmakingQueue);
  const [isSearchingForGame, setIsSearchingForGame] = useState<boolean>(false);
  const [isConnectedToMatchMakingService, setIsConnectedToMatchMakingService] =
    useState<boolean>(false);
  const [matchmakingServiceStatus, setMatchmakingServiceStatus] =
    useState<string>("");
  const [matchmakingSocketId, setMatchmakingSocketId] = useState<string>("");
  const [playersInQueue, setPlayersInQueue] = useState<number>(0);

  //When a match is found, set these fields
  const [matchFound, setMatchFound] = useState<boolean>(false);
  const [matchDetails, setMatchDetails] = useState<MatchDetails>();

  //cancel matchmaking logic
  const {
    mutateAsync: cancelMatchmakingQueueAsync,
    isLoading: cancelMatchmakingQueueIsLoading,
  } = useMutation("cancelMatchmakingQueue", cancelMatchMakingQueue);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_BASE_URL!);
    socket.on("connect", () => {
      setIsConnectedToMatchMakingService(true);
      setMatchmakingSocketId(socket.id);
    });
    socket.on("match-found", (message) => {
      console.log(message);
      setMatchFound(true);
      setMatchDetails(message);
    });
    socket.on("matchmaking-service-status", (message) => {
      setMatchmakingServiceStatus(message.message);
    });

    socket.on("players-in-queue", (message) => {
      setPlayersInQueue(message.playersInQueue);
    });
    socket.on("disconnect", () => {
      setIsConnectedToMatchMakingService(false);
      console.log("Disconnected!");
    });
    return () => {
      socket.off("players-in-queue");
      socket.off("matchmaking-service-status");
      socket.off("connection");
      socket.off("disconnect");
    };
  }, []);
  const handleCancel = async () => {
    setStatus(1);
    changeStatus(1);
    setIsSearchingForGame(false);
    await cancelMatchmakingQueueAsync(id);
  };
  const handleSubmit = async () => {
    setCurrentVibe(vibe);
    setCurrentContent(content);
    setStatus(2);
    changeStatus(2);
    setIsSearchingForGame(true);
    let payload: MatchMakingQueueInformation = {
      active: 1,
      content_weight: content,
      vibe_weight: vibe,
      user_id: id,
      game_id: game,
      time_entered: new Date().toISOString().slice(0, 19).replace("T", " "),
      socket_id: matchmakingSocketId,
    };
    await joinMatchmakingQueueAsync(payload);
    console.log(payload);
    //connect to socket
    // navigate("/party");
  };
  const logout = () => {
    reset();
    console.clear();
    localStorage.clear();
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
            onChange={(event) => setGame(parseInt(event.target.value))}
            fullWidth
          >
            {games.games.map((game: any) => (
              <MenuItem key={game.id} value={game.id}>
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

        {!matchFound && (
          <>
            <Button
              disabled={isSearchingForGame || !vibe || !content}
              variant="contained"
              onClick={handleSubmit}
            >
              {!isSearchingForGame && <>Find me a Game</>}
              {isSearchingForGame && (
                <>
                  <CircularProgress
                    size={24}
                    sx={{ color: "white" }}
                  ></CircularProgress>
                </>
              )}
            </Button>
            {isSearchingForGame && (
              <Button variant="contained" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            )}

            {isSearchingForGame && (
              <Typography sx={{ color: "text.primary" }}>
                Finding a Match...
              </Typography>
            )}

            <Typography sx={{ color: "text.primary" }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                Matchmaking Service: {matchmakingServiceStatus}
                <CheckCircleIcon color="success"></CheckCircleIcon>
              </span>
            </Typography>
            <Typography sx={{ color: "text.primary" }}>
              Matchmaking Session ID: {matchmakingSocketId}
            </Typography>

            <Typography sx={{ color: "text.primary" }}>
              Players in Queue: {playersInQueue}
            </Typography>
          </>
        )}

        {matchFound && (
          <Alert severity="info" variant="filled">
            <AlertTitle>Match Found!</AlertTitle>
            <a href={`/${matchDetails?.lobby_id}`}>
              Lobby ID: {matchDetails?.lobby_id}
            </a>
          </Alert>
        )}

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
