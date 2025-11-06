import express from 'express';
// Import the model using the updated name
import TravelPackageExtended from '../models/TravelPackageExtended.js'; 

const router = express.Router();

/**
 * @route GET /api/extended-packages
 * @desc Get ALL POPULAR PACKAGES EXTENDED data
 * @access Public
 * React Fetch Example: fetch('/api/extended-packages')
 */
router.get('/', async (req, res, next) => {
  try {
    // Fetch all packages, sorting by rating (highest first)
    const packages = await TravelPackageExtended.find({}).sort({ rating: -1, price: 1 }); 
    
    res.status(200).json({
      success: true,
      count: packages.length,
      data: packages
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching extended packages.' });
  }
});

/**
 * @route GET /api/extended-packages/:id
 * @desc Get a SINGLE extended travel package by its unique 'id'
 * @access Public
 * React Fetch Example: fetch('/api/extended-packages/p1')
 */
router.get('/:id', async (req, res, next) => {
  try {
    const packageId = req.params.id;
    const pkg = await TravelPackageExtended.findOne({ id: packageId }); 

    if (!pkg) {
      return res.status(404).json({ success: false, message: `Extended Package ID ${packageId} not found.` });
    }
    
    res.status(200).json({ success: true, data: pkg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching extended package details.' });
  }
});

export default router;