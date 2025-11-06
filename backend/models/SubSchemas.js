import mongoose from 'mongoose';

// --- 1. Review Sub-Schema ---
export const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String },
  date: { type: Date, default: Date.now },
});

// --- 2. Policy Sub-Schema ---
export const PolicySchema = new mongoose.Schema({
  checkIn: { type: String },
  checkOut: { type: String },
  cancellation: { type: String },
});

// --- 3. Contact Sub-Schema ---
export const ContactSchema = new mongoose.Schema({
  phone: { type: String },
  email: { type: String },
});

// --- 4. Coordinate Sub-Schema ---
export const CoordinateSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

// --- 5. Room Type Sub-Schema ---
export const RoomTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  beds: { type: String },
  capacity: { type: Number, min: 1 },
});