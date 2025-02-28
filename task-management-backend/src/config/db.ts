import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        // Ensure MONGODB_URI is set
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error('MongoDB URI is missing');
        }

        // Connect to MongoDB using the URI from the .env file
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('An unknown error occurred during database connection');
        }
        process.exit(1);
    }
};

export default connectDB;
