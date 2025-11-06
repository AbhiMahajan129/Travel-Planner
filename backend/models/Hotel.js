import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  // Unique ID for URL routing (e.g., 'h1')
  id: {
    type: String,
    required: true,
    unique: true
  },
  // Name of the hotel (e.g., 'Burj Al Arab')
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  // Location (City, Country)
  location: {
    type: String,
    required: true
  },
  // Customer rating (out of 5.0)
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // URL for the primary hotel image
  image: {
    type: String
  },
  // Starting price per night
  price: {
    type: Number,
    required: true,
    min: 0
  },
  // Hotel classification or style (e.g., '7★ Luxury', 'Iconic Resort')
  type: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Tracks creation and update times
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;