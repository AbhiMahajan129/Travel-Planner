import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema({
  // Unique ID for URL routing (e.g., 's1')
  id: {
    type: String,
    required: true,
    unique: true
  },
  // Name of the site (e.g., 'Taj Mahal')
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
  // User/platform rating (out of 5.0)
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // URL for the primary site image
  image: {
    type: String
  },
  // Estimated ticket price (in USD or local currency)
  price: {
    type: Number,
    required: true,
    min: 0
  },
  // Short description or tag line
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Tracks creation and update times
});

const Site = mongoose.model('Site', SiteSchema);

export default Site;