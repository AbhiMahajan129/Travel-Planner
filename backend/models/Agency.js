import mongoose from 'mongoose';

const AgencySchema = new mongoose.Schema({
  // Unique identifier (used in URLs/frontend routing)
  id: {
    type: String,
    required: true,
    unique: true
  },
  // Name of the travel agency
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  // Average customer rating
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // URL to the agency's image/logo
  image: {
    type: String
  },
  // The agency's area of expertise (e.g., 'Adventure & Small Group')
  specialty: {
    type: String,
    required: true
  },
  // Number of destinations they cover
  destinations: {
    type: Number,
    required: true,
    min: 1
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const Agency = mongoose.model('Agency', AgencySchema);

export default Agency;