import mongoose from 'mongoose';

// Schema for the POPULAR PACKAGES EXTENDED data set
const TravelPackageExtendedSchema = new mongoose.Schema({
  // Unique ID for URL routing (e.g., 'p1')
  id: {
    type: String,
    required: [true, 'Package ID is required.'],
    unique: true
  },
  // Title of the package (e.g., 'Paris & Rome Escape')
  title: {
    type: String,
    required: [true, 'Package title is required.'],
    trim: true,
    unique: true
  },
  // URL for the main package image
  image: {
    type: String
  },
  // Total price of the package
  price: {
    type: Number,
    required: [true, 'Price is required.'],
    min: 0
  },
  // Customer rating (out of 5.0)
  rating: {
    type: Number,
    required: [true, 'Rating is required.'],
    min: 0,
    max: 5
  },
  // Duration in days
  duration: {
    type: Number,
    required: [true, 'Duration is required.'],
    min: 1
  },
  // List of included activities/sites
  items: [{
    type: String
  }],
  // List of planned hotels (names only)
  hotels: [{
    type: String
  }],
  // List of planned restaurants (names only)
  restaurants: [{
    type: String
  }],
  // Name of the organizing travel agency
  agency: {
    type: String,
    required: [true, 'Agency name is required.']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

const TravelPackageExtended = mongoose.model('TravelPackageExtended', TravelPackageExtendedSchema);

export default TravelPackageExtended;