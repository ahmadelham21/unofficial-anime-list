import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import AnimeCard from "./AnimeCard";
import { useSelector, useDispatch } from "react-redux";
import { addData, selectAnime } from "../../../redux/slice/topAnimeSlice";
import { jikanApi } from "../../../constant/jikanApi";
import SkeletonCard from "./SkeletonCard";

const TopAnimeList = () => {
  const topAnime = useSelector((state) => state.topAnime.topAnime);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (topAnime.length < 0) {
      return;
    }
    axios
      .get(jikanApi.url.getTopAnime)
      .then((response) => {
        const data = response.data.data;
        dispatch(addData({ data }));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  }, [dispatch, topAnime]);

  const handleDetailAnime = (anime) => {
    dispatch(selectAnime(anime));
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
      {isLoading ? (
        <Grid container spacing={4}>
          {[...Array(12).keys()].map((index) => (
            <Grid item key={index} lg={2} md={3} sm={6} xs={12}>
              <SkeletonCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              mb: 4,
            }}
          >
            <Typography variant="h6" color="white">
              Top Anime
            </Typography>
            <Button>See more</Button>
          </Box>
          <Grid container spacing={4}>
            {topAnime.data.map((anime) => (
              <Grid item lg={2.4} md={3} sm={6} xs={12} key={anime.mal_id}>
                <AnimeCard
                  title={anime.title}
                  image={anime.images.jpg.large_image_url}
                  rating={anime.score}
                  votes={anime.scored_by}
                  id={anime.mal_id}
                  onSelectAnime={() => handleDetailAnime(anime)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default TopAnimeList;
