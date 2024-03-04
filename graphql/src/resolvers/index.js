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

  // mutations to alter data in db
  Mutation: {
    // add
    addMovie: async (_, { movie }) => {
      try {
        const newMovie = new Movie(movie);
        await newMovie.save();

        return newMovie;
      } catch (error) {
        console.error('Error adding movie:', error);
        throw new Error('Failed to add movie');
      }
    },
    addUser: async (_, { user }) => {
      try {
        const newUser = new User(user);
        await newUser.save();

        return newUser;
      } catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to add user');
      }
    },
    addReview: async (_, { review }) => {
      try {
        const newReview = new Review(review);
        await newReview.save();

        return newReview;
      } catch (error) {
        console.error('Error adding review:', error);
        throw new Error('Failed to add review');
      }
    },

    // delete
    deleteMovie: async (_, { id }) => {
      try {
        const deleted = await Movie.findByIdAndDelete(id);
        if (!deleted) {
          throw new Error('Movie not found');
        }

        return { success: true };
      } catch (error) {
        throw new Error(`Error deleting movie: ${error.message}`);
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) {
          throw new Error('User not found');
        }

        return { success: true };
      } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
      }
    },
    deleteReview: async (_, { id }) => {
      try {
        const deleted = await Review.findByIdAndDelete(id);
        if (!deleted) {
          throw new Error('Review not found');
        }

        return { success: true };
      } catch (error) {
        throw new Error(`Error deleting review: ${error.message}`);
      }
    },

    // update
    updateMovie: async (_, { id, movie }) => {
      try {
        const existingMovie = await Movie.findById(id);
        if (!existingMovie) {
          throw new Error('Movie not found');
        }

        Object.assign(existingMovie, movie);
        await existingMovie.save();

        return existingMovie;
      } catch (error) {
        console.error('Error updating movie:', error);
        throw new Error('Failed to update movie');
      }
    },
    updateUser: async (_, { id, user }) => {
      try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
          throw new Error('User not found');
        }

        Object.assign(existingUser, user);
        await existingUser.save();

        return existingUser;
      } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
      }
    },
    updateReview: async (_, { id, review }) => {
      try {
        const existingReview = await Review.findById(id);
        if (!existingReview) {
          throw new Error('Review not found');
        }

        Object.assign(existingReview, review);
        await existingReview.save();

        return existingReview;
      } catch (error) {
        console.error('Error updating review:', error);
        throw new Error('Failed to update review');
      }
    },
  },
};
