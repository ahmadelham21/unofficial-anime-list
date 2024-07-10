import React from "react";
import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";

const CharacterGrid = ({ characters }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {characters.map((char) => (
          <Grid item key={char.character.mal_id} xs={12} sm={6} md={4} lg={2}>
            <CardActionArea>
              <Card sx={{ width: "100%", minHeight: 360 }}>
                <Box sx={{ p: 2 }}>
                  <img
                    src={char.character.images.jpg.image_url}
                    alt={char.character.name}
                    style={{ width: "100%" }}
                  />
                  <Typography variant="h6">{char.character.name}</Typography>
                  <Typography variant="body2">{char.role}</Typography>
                </Box>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CharacterGrid;
