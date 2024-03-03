import { Movie, Review, User } from '../models/index.js';

export const resolvers = {
  // main queries and entry points
  Query: {
    movies: async () => {
      try {
        const movies = await Movie?.find();
        return movies;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    movie: async (_, { id }) => {
      try {
        const movie = await Movie?.findById(id);
        return movie;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    reviews: async () => {
      try {
        const reviews = await Review?.find();
        return reviews;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    review: async (_, { id }) => {
      try {
        const review = await Review?.findById(id);
        return review;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    users: async () => {
      try {
        const users = await User?.find();
        return users;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    user: async (_, { id }) => {
      try {
        const user = await User?.findById(id);
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },

  // related data from entry point
  Movie: {
    reviews: async (parent, { limit = 10, skip = 0 }) => {
      try {
        const { id } = parent;

        // Filter reviews based on movie ID
        const reviews = await Review.find({ movieId: id })
          // Apply pagination if necessary
          .limit(limit)
          .skip(skip);

        return reviews;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  User: {
    reviews: async (parent, { limit = 10, skip = 0 }) => {
      try {
        const { id } = parent;

        // Filter reviews based on movie ID
        const reviews = await Review.find({ movieId: id })
          // Apply pagination if necessary
          .limit(limit)
          .skip(skip);

        return reviews;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Review: {
    user: async () => {
      try {
        const { id } = parent;
        const user = User.find({ reviewId: id });

        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    movie: async () => {
      try {
        const { id } = parent;
        const movie = Movie.find({ reviewId: id });

        return movie;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};
