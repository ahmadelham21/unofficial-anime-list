import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      backgroundColor="primary"
      component="footer"
      sx={{
        py: 3,
        px: 2,

        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.main
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" color="white">
          My sticky footer can be found here.
        </Typography>
        <Typography variant="body2" color="white">
          {"Copyright © "}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
