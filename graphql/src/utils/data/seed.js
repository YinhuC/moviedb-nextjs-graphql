// seed.js
import { mongoose } from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../db/index.js';
import data from './data.js';
import _colors from 'colors';
import { Movie, Review, User } from '../../models/index.js';

dotenv.config();

const seedDatabase = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Movie.deleteMany();
    await Review.deleteMany();
    await User.deleteMany();

    // Seed new data
    const { movies, reviews, users } = data;
    await Movie.insertMany(movies);
    await Review.insertMany(reviews);
    await User.insertMany(users);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error.message);
  } finally {
    // Close the MongoDB connection
    await mongoose.connection.close();
  }
};

// Execute the seeding script
seedDatabase();
