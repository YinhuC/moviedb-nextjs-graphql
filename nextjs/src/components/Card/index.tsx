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

function MovieCard({ movie }: { movie: Movie }) {
  const { title, platforms } = movie;

  const platformList = platforms?.map((platform, index) => (
    <ListItem disablePadding key={`platform-list-item-${index}`}>
      <ListItemText primary={platform} />
    </ListItem>
  ));

  return (
    <Card sx={{ minWidth: 275 }} className="p-5 w-full">
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
