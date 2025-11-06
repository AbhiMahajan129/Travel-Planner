import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  // Unique ID for URL routing (e.g., 'r1')
  id: {
    type: String,
    required: [true, 'Restaurant ID is required.'],
    unique: true
  },
  // Name of the restaurant
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true
  },
  // Location (e.g., 'Eiffel Tower, Paris')
  location: {
    type: String,
    required: [true, 'Location is required.']
  },
  // Type of cuisine (e.g., 'French Fine Dining')
  cuisine: {
    type: String,
    required: [true, 'Cuisine is required.']
  },
  // Price tier (e.g., '$$$')
  price: {
    type: String,
    required: [true, 'Price tier is required.'],
    enum: ['$', '$$', '$$$', '$$$$', '$$$$$'] 
  },
  // Customer rating (out of 5.0)
  rating: {
    type: Number,
    required: [true, 'Rating is required.'],
    min: 0,
    max: 5
  },
  // Array of image URLs
  images: [{
    type: String
  }],
  // Short marketing description
  description: {
    type: String
  },
  // Array of selling points/keywords
  highlights: [{
    type: String
  }],
  // Array of sample menu items
  menuSample: [{
    type: String
  }],
  // Estimated average wait time (as a string, e.g., '30-45 min')
  averageWait: {
    type: String
  },
  // Cleanliness score (out of 10)
  cleanliness: {
    type: Number,
    min: 0,
    max: 10
  },
  // Value for Money score (out of 5.0)
  valueScore: {
    type: Number,
    min: 0,
    max: 5
  }
}, {
  timestamps: true
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;