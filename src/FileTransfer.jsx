import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import axios from "axios";

const sendIconUrl = "../public/assets/send3.png"; // Ensure this path is correct

const FileTransfer = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [file, setFile] = useState(null);
  const [otp, setOtp] = useState("");
  const [isUploading, setIsUploading] = useState(false); // State to track uploading
  const [isDownloading, setIsDownloading] = useState(false); // State to track downloading
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleOpenDialog = (message, otp = "") => {
    const fullMessage = otp ? `${message}\nYour OTP is: ${otp}` : message;
    setDialogMessage(fullMessage);
    setIsDialogOpen(true);
  };

  const handleDownload = async () => {
    if (!otp) {
      handleOpenDialog("Please enter OTP");
      return;
    }
    setIsDownloading(true); // Start downloading
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/download`,
        { otp }
      );
      const { url } = response.data;

      if (url) {
        window.location.href = url;
      } else {
        handleOpenDialog("Download Link not found. Try again!");
      }
    } catch (error) {
      console.error("Download error:", error);
      handleOpenDialog("File download Failed. Try again!");
    } finally {
      setIsDownloading(false); // End downloading
    }
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return;
    }

    setFile(selectedFile);
    setIsUploading(true); // Start uploading

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setOtp(response.data.otp);
      handleOpenDialog("File uploaded successfully!", response.data.otp);
    } catch (error) {
      console.error("File upload error:", error);
      handleOpenDialog("File upload Failed. Try again!");
    } finally {
      setIsUploading(false); // End uploading
    }
  };

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
            <input
              accept="image/*,application/pdf"
              style={{ display: "none" }}
              id="file-input"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-input">
              <Button
                fullWidth
                variant="contained"
                component="span"
                size="large"
                id="sendButton"
                sx={{
                  py: 12,
                  color: "black",
                  backgroundColor: "background.paper",
                  borderRadius: "25px",
                  border: "0px solid white",
                  marginBottom: "10px",
                  backgroundImage: `url(${sendIconUrl})`,
                  backgroundSize: "150px 150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: isUploading ? 0.5 : 1,
                  "&:hover": {
                    backgroundColor: "background.paper",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
                    opacity: 0.7, // Reset opacity on hover if needed
                  },
                }}
              >
                {isUploading ? <CircularProgress /> : null}
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter OTP"
              onChange={handleOtpChange}
              sx={{ borderRadius: "25px" }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    onClick={handleDownload}
                    sx={{
                      borderRadius: "15px",
                      color: "black",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "grey" },
                    }}
                  >
                    {isDownloading ? (
                      <CircularProgress size={24} />
                    ) : (
                      <CloudDownloadIcon />
                    )}
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
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#333", // Dark background for the dialog
            color: "#fff", // Light text color for contrast
            borderRadius: 2, // Rounded corners
            // Responsive width
            maxWidth: "80%", // Default max width
            width: "100%", // Full width
            mx: 2, // Horizontal margin for smaller screens
            "@media (min-width: 600px)": {
              maxWidth: "400px", // Max width on larger screens
              mx: "auto", // Center dialog on larger screens
            },
          },
          "& .MuiDialogTitle-root": {
            borderBottom: "1px solid #444", // Separator for the title
          },
          "& .MuiDialogContent-root": {
            paddingTop: 2,
            paddingBottom: 2, // Reduce vertical padding
          },
          "& .MuiDialogActions-root": {
            borderTop: "1px solid #444", // Separator for the actions
            padding: "8px 24px", // Custom padding for actions
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setIsDialogOpen(false)}
            sx={{ color: "#4caf50" }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default FileTransfer;
