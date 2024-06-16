import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

export default connectMongoDb;