import { Schema, mongoose } from 'mongoose';

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    platform: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model('Movie', MovieSchema);
export default Movie;
