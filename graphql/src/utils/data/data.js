import { Types } from 'mongoose';

const movies = [
  {
    _id: new Types.ObjectId(),
    title: 'The Shawshank Redemption',
    platform: ['Netflix', 'HBO Max'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'The Godfather',
    platform: ['Hulu', 'Amazon Prime'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'The Dark Knight',
    platform: ['HBO Max', 'Apple TV+'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'Pulp Fiction',
    platform: ['Netflix', 'Amazon Prime'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'The Lord of the Rings: The Return of the King',
    platform: ['HBO Max', 'Disney+'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'Inception',
    platform: ['Netflix', 'HBO Max'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'Fight Club',
    platform: ['Hulu', 'Amazon Prime'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'The Matrix',
    platform: ['HBO Max', 'Apple TV+'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'Forrest Gump',
    platform: ['Netflix', 'Amazon Prime'],
  },
  {
    _id: new Types.ObjectId(),
    title: 'Avatar',
    platform: ['HBO Max', 'Disney+'],
  },
];

const reviews = [
  {
    _id: new Types.ObjectId(),
    rating: 5,
    content: 'A true cinematic masterpiece!',
    movieId: movies[0]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 4,
    content: 'A classic film everyone should see.',
    movieId: movies[1]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 5,
    content: 'An epic conclusion to a legendary trilogy.',
    movieId: movies[4]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 4,
    content: 'A cult classic with a unique style.',
    movieId: movies[3]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 5,
    content: 'Gripping story with unforgettable characters.',
    movieId: movies[2]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 4,
    content: 'Mind-bending plot and exceptional visuals.',
    movieId: movies[5]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 3,
    content: 'An intense journey with unexpected twists.',
    movieId: movies[6]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 5,
    content: 'Revolutionary film that redefined sci-fi.',
    movieId: movies[7]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 4,
    content: 'Heartwarming story with a touch of humor.',
    movieId: movies[8]._id,
    userId: new Types.ObjectId(),
  },
  {
    _id: new Types.ObjectId(),
    rating: 5,
    content: 'Mesmerizing world and groundbreaking technology.',
    movieId: movies[9]._id,
    userId: new Types.ObjectId(),
  },
];

const users = [
  { _id: new Types.ObjectId(), name: 'John Doe', verified: true },
  { _id: new Types.ObjectId(), name: 'Jane Smith', verified: false },
  { _id: new Types.ObjectId(), name: 'Michael Brown', verified: true },
  { _id: new Types.ObjectId(), name: 'Emily Johnson', verified: false },
  { _id: new Types.ObjectId(), name: 'Chris Williams', verified: true },
];

export default { movies, reviews, users };
