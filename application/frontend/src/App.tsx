import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Landing from "./Routes/Landing";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import Match from "./Routes/Match";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useUserStore } from "./Stores/UserStore";
import { QueryClient, QueryClientProvider } from "react-query";
import Party from "./Routes/Party";
import PrivateRoutes from "./Routes/PrivateRoutes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const queryClient = new QueryClient();
const authRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/matchmaking",
    children: [
      {
        index: true,
        element: <Match></Match>,
      },
      {
        path: "lobby",
        element: <Party />,
      },
    ],
  },
]);

const mainRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Match />,
      },
      {
        path: "party",
        element: <Party />,
      },
    ],
  },
]);

function App() {
  const loggedIn = useUserStore((state) => state.loggedIn);
  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Match />} path="/home" />
              <Route element={<Party />} path="/party" />
            </Route>
            <Route element={<Landing />} index />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
