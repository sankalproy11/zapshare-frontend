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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const FileTransfer = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          bgcolor: "background.default",
        }}
      >
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              size="large"
              sx={{ py: 3 }}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Input key"
              InputProps={{
                endAdornment: (
                  <Button variant="contained">
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
