import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function MovieCard({
  title,
  platforms,
}: {
  title: String;
  platforms: String[];
}) {
  const platformList = platforms.map((platform) => (
    <ListItem disablePadding>
      <ListItemText primary={platform} />
    </ListItem>
  ));

  return (
    <Card sx={{ minWidth: 275 }} className="p-5">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Movie
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <List dense={true}>{platformList}</List>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
