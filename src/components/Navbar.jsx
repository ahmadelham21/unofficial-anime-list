import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import { myRoute } from "../main";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <AppBar
        color={scrollPosition > 400 || !isHomePage ? "primary" : "transparent"}
        sx={isHomePage ? {} : { backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <NotStartedIcon sx={{ color: "white" }} />

            <Typography
              variant="h6"
              sx={{ marginLeft: 1, border: "none", color: "white" }}
            >
              My Anime
            </Typography>

            <Box
              sx={{ flexGrow: 2, display: "flex", justifyContent: "center" }}
            >
              {myRoute.map((route) => (
                <Button
                  component={Link}
                  key={route.name}
                  to={route.path}
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {route.name}
                </Button>
              ))}
            </Box>
            <Button
              onClick={handleLogout}
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                ":hover": {
                  borderColor: "white",
                },
              }}
            >
              {" "}
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
