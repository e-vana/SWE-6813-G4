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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Landing  */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Match />
    </ThemeProvider>
  );
}

export default App;
