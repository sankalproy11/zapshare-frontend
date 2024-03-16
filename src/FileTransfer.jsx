import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

// Assuming you have an image named 'send-icon.png' in your project's 'public' directory or a similar accessible place
const sendIconUrl = "src/assets/send3.png"; // Update this path to where your actual image is located

const FileTransfer = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
      <Paper
        elevation={4}
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          borderRadius: "25px",
          bgcolor: "background.paper",
          border: "3px solid white",
        }}
      >
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 12,
                color: "black",
                backgroundColor: "background.paper",
                opacity: 1, // Set the opacity to 0.8
                "&:hover": {
                  backgroundColor: "background.paper",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
                  opacity: 0.7, // Reset opacity on hover if needed
                },
                borderRadius: "25px",
                border: "0px solid white",
                marginBottom: "10px",
                backgroundImage: `url(${sendIconUrl})`,
                backgroundSize: "150px 150px", // Match your image size
                backgroundPosition: "center", // Center the background image
                backgroundRepeat: "no-repeat", // Prevent the image from repeating
              }}
            >
              {/* <img
                src={sendIconUrl}
                alt="Send"
                style={{ width: 400, height: 210 }}
              /> */}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter OTP"
              sx={{ borderRadius: "25px" }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "15px",
                      color: "black",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "grey" },
                    }}
                  >
                    <CloudDownloadIcon />
                  </Button>
                ),
              }}
              size="large"
            />
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="body2" color="textSecondary" align="center">
        Our never-ending goal is to make file transfer Easier, Faster, and
        Safer.
      </Typography>
    </Container>
  );
};

export default FileTransfer;
