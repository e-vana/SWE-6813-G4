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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useUserStore } from "./Stores/UserStore";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

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
]);

const mainRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/match",
        element: <Match />,
      },
    ],
  },
]);

function App() {
  const loggedIn = useUserStore((state) => state.loggedIn);
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={loggedIn ? mainRouter : authRouter} />
    </ThemeProvider>
  );
}

export default App;
