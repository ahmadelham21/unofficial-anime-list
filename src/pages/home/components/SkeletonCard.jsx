import { Card, CardContent, Skeleton, Typography } from "@mui/material";

const SkeletonCard = () => {
  return (
    <>
      <Card
        sx={{ maxWidth: 345, maxHeight: 400, backgroundColor: "#011d5a" }}
        elevation={0}
      >
        <Skeleton variant="rectangular" width="100%" height={200} />

        <CardContent>
          <Typography variant="h5" component="div">
            <Skeleton />
          </Typography>
          <Typography variant="body2">
            <Skeleton />
          </Typography>
          <Typography variant="body2">
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SkeletonCard;
