import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // connect using mongoose
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
