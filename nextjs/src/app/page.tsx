import MovieGrid from '@/components/MovieGrid';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container className="mt-5">
      <MovieGrid />
    </Container>
  );
}
