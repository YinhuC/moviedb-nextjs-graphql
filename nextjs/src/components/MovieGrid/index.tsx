'use client';
import MovieCard from '@/components/Card';
import { Grid } from '@mui/material';
import { GET_MOVIES } from '@/queries/movies';
import { useQuery } from '@apollo/client';

function MovieGrid() {
  const { data, loading, error } = useQuery(GET_MOVIES);
  const movies: Movie[] = data?.movies || [];

  if (loading)
    return (
      <p className="text-white flex items-center justify-center">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="text-white flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  const gridItems = movies.map((movie: Movie, index: Number) => (
    <Grid item xs={4} key={`movie-grid-${index}`} className="flex">
      <MovieCard movie={movie} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {gridItems}
    </Grid>
  );
}

export default MovieGrid;
