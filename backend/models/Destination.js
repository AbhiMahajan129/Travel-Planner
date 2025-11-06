import mongoose from 'mongoose';
import { 
  ReviewSchema, 
  PolicySchema, 
  ContactSchema, 
  CoordinateSchema, 
  RoomTypeSchema 
} from './SubSchemas.js'; // Import sub-schemas

// --- 6. Site Detail Sub-Schema (Nested within Destination) ---
const SiteDetailSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  highlights: [{ type: String }],
  tips: [{ type: String }],
  reviews: [ReviewSchema],
  coordinates: CoordinateSchema,
  wiki: { type: String }
});

// --- 7. Food Place Sub-Schema (Nested within Destination) ---
const FoodPlaceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String },
  images: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  description: { type: String },
  specialties: [{ type: String }],
  reviews: [ReviewSchema],
  cleanlinessScore: { type: Number, min: 0, max: 10 },
  averagePrice: { type: Number, min: 0 } // Assuming currency in USD/EUR
});


// --- 8. Hotel Detail Sub-Schema (Nested within Destination) ---
const HotelDetailSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String },
  images: [{ type: String }],
  location: { type: String, required: true },
  description: { type: String },
  amenities: [{ type: String }],
  rating: { type: Number, min: 0, max: 5 },
  reviews: [ReviewSchema],
  policies: PolicySchema,
  contact: ContactSchema,
  coordinates: CoordinateSchema,
  nearbyAttractions: [{ type: String }],
  roomTypes: [RoomTypeSchema]
});


// === MAIN DESTINATION SCHEMA ===
const DestinationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  // Detailed Embedded Sub-documents
  hotels: [HotelDetailSchema],
  foodPlaces: [FoodPlaceSchema],
  sites: [SiteDetailSchema],

  // Simple lists (Note: Your data has duplicates, e.g. sites/restaurants keys are repeated)
  restaurants: [{ id: String, name: String }], 
  sites: [{ id: String, name: String }],
}, {
  timestamps: true 
});

const Destination = mongoose.model('Destination', DestinationSchema);

export default Destination;