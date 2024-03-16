import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "./assets/zapshare-logo-white.png";

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
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
    </Box>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${logo})`,
            width: 180,
            height: 80,
          }}
        />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
