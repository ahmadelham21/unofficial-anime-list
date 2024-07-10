import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const AnimeCard = ({ image, title, rating, votes, onSelectAnime, id }) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 345,
        maxHeight: 600,
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",

        backgroundImage: `url(${image})`,
      }}
    >
      <CardActionArea
        component={Link}
        to={`/detail/${id}`}
        onClick={onSelectAnime}
        sx={{
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "end",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
        }}
      >
        <CardContent>
          <Typography
            color="white"
            gutterBottom
            variant="subtitle2"
            fontWeight={"bold"}
            component="div"
            fontSize={12}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <StarIcon
              sx={{ color: "yellow", mt: 0.2, mr: 0.3 }}
              fontSize="sm"
            />
            <Typography
              color="white"
              gutterBottom
              variant="subtitle2"
              fontWeight={"bold"}
              component="div"
              fontSize={12}
            >
              {rating} ({votes})
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AnimeCard;
