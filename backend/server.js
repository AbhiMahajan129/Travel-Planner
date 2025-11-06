

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import packageRoutes from './routes/packageRoutes.js'; // Adjust path

import connectDB from "./DB/dbConnect.js";


dotenv.config();
const app = express();

// Middleware: Body parser
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// --- Integrate Routes ---
// All requests starting with /api/packages will be handled by packageRoutes
app.use('/api/packages', packageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));