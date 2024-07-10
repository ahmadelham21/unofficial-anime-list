import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage:
          'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/99943c128826103.61749a15cb455.png")',
        // backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh", // Contoh untuk tinggi 100% viewport height
        width: "auto",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 20 }}>
          <Typography variant="h3" color="white">
            Welcome.
          </Typography>
          <Typography variant="h4" color="white">
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Search anime..."
              fullWidth="true"
              variant="filled"
              color="info"
              sx={{ backgroundColor: "white", borderRadius: 2, mr: 1 }}
            />
            <Button variant="contained">
              <SearchIcon /> Search
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Konten tambahan di dalam Hero */}
    </Box>
  );
};

export default Hero;
