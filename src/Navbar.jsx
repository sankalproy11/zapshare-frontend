import React from "react";
import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZapShare
        </Typography>
        <Button color="inherit" component={Link} to="/features">
          Features
        </Button>
        <Button color="inherit" component={Link} to="/enterprise">
          Enterprise
        </Button>
        <Button color="inherit" component={Link} to="/support">
          Support
        </Button>
        <Button color="inherit" component={Link} to="/signin">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
