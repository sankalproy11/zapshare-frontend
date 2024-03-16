import React from "react";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./Navbar";
import FileTransfer from "./FileTransfer";
import Footer from "./Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box component="main" flexGrow={1}>
          <FileTransfer />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
