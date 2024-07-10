import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import {
  Box,
  Card,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import GenreCard from "./components/GenreCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
import axios from "axios";
import { jikanApi } from "../../constant/jikanApi";
import CharacterGrid from "./components/CharacterGrid";

const AnimeDetail = () => {
  const selectedAnime = useSelector((state) => state.topAnime.selectedAnime);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(jikanApi.url.getCharacterByAnimeId(selectedAnime["mal_id"]))
      .then((response) => {
        const data = response.data.data;
        setCharacters(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  }, [selectedAnime]);

  const handleTrailer = (url) => {
    window.open(url);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}></Box>

      <Card>
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            backgroundImage: `url(${
              selectedAnime.trailer.images.maximum_image_url
                ? selectedAnime.trailer.images.maximum_image_url
                : selectedAnime.images.jpg.large_image_url
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
              color: "white",
              p: 8,
            }}
          >
            <Container maxWidth="xl">
              <Typography variant="h5" fontWeight={"bold"}>
                {selectedAnime.title}{" "}
              </Typography>
              <Typography variant="subtitle2" mt={0.1}>
                {selectedAnime.rating}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  my: 1,
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">
                  {selectedAnime.status}
                </Typography>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ mx: 2 }}
                  color="white"
                />

                <Typography variant="subtitle1">
                  {selectedAnime.type} ({selectedAnime.episodes})
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ mx: 2 }}
                  color="white"
                />

                {selectedAnime.genres.map((genre) => (
                  <GenreCard key={genre.mal_id} genre={genre.name} />
                ))}
              </Box>
              <Typography variant="subtitle2" color="inherit">
                {selectedAnime.synopsis}
              </Typography>

              <Button
                onClick={
                  selectedAnime.trailer.url
                    ? () => handleTrailer(selectedAnime.trailer.url)
                    : null
                }
                variant="contained"
                color="primary"
                sx={{ pl: 1, mt: 2 }}
              >
                <PlayArrowIcon /> Trailer
              </Button>
            </Container>
          </Box>
        </Box>
      </Card>

      <Container maxWidth="xl">
        <Box sx={{ m: 8 }}>
          <Typography variant="h4" color="white" gutterBottom>
            Characters
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
          <CharacterGrid  characters={characters}/>
          )}
        </Box>
      </Container>
    </>
  );
};

export default AnimeDetail;
