import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../public/assets/zapshare-logo-black.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white", // Set the background color to white
        color: "black", // Set the text color to black
        py: 4, // Reduced padding for a smaller footer
        mt: "auto", // Keep the margin top as auto
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={6} sm={3} md={2}>
            <img
              src={logo}
              alt="ZapShare Logo"
              style={{ maxWidth: "200px" }} // Smaller logo size
            />
          </Grid>
          <Grid item xs={6} sm={9} md={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {["Team", "History", "Contact us", "Locations"].map(
                    (item) => (
                      <Box component="li" key={item} sx={{ padding: "2px 0" }}>
                        <Link href="#" underline="hover">
                          {item}
                        </Link>
                      </Box>
                    )
                  )}
                </Box>
              </Grid>
              {/* Add more columns as needed */}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">© 2024 ZapShare</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              color="inherit"
              aria-label="Facebook"
              href="#"
              size="large"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Twitter"
              href="#"
              size="large"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Instagram"
              href="#"
              size="large"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="#"
              size="large"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
