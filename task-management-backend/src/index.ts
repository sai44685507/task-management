import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';

dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Enable CORS with specific origin
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});