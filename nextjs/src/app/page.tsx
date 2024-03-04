import MovieCard from '@/components/Card';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <Container className="mt-5">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MovieCard
            title={'Title of Movie'}
            platforms={['Disney+', 'Netflix']}
          />
        </Grid>
        <Grid item xs={4}>
          <MovieCard
            title={'Title of Movie'}
            platforms={['Disney+', 'Netflix']}
          />
        </Grid>
        <Grid item xs={4}>
          <MovieCard
            title={'Title of Movie'}
            platforms={['Disney+', 'Netflix']}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
