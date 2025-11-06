import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  // Unique identifier for the package (e.g., 'pkg1')
  id: {
    type: String,
    required: true,
    unique: true
  },
  // Title of the package (e.g., 'Paris Getaway')
  title: {
    type: String,
    required: true,
    trim: true
  },
  // Price in USD (or your chosen currency)
  price: {
    type: Number,
    required: true,
    min: 0
  },
  // Array of inclusions/items in the package
  items: [{
    type: String
  }]
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const Package = mongoose.model('Package', PackageSchema);

export default Package;