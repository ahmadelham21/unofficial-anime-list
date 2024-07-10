import { Badge, Card, Typography } from "@mui/material";
import React from "react";

const GenreCard = ({ genre }) => {
  return (
    <>
      <Card sx={{ padding: 0.5, mx: 0.2 }}>
        <Typography variant="body2" color="initial">
          {genre}
        </Typography>
      </Card>
    </>
  );
};

export default GenreCard;
