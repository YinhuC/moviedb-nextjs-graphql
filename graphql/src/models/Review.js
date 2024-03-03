import { Schema, mongoose } from 'mongoose';

const ReviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
