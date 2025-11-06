import express from 'express';
import Hotel from '../models/Hotel.js'; // Adjust the import path

const router = express.Router();

/**
 * @route GET /api/hotels
 * @desc Get ALL popular hotels
 * @access Public
 */
router.get('/', async (req, res, next) => {
  try {
    // Fetch all hotels, sorting by rating (highest first)
    const hotels = await Hotel.find({}).sort({ rating: -1, price: 1 }); 
    
    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels
    });
  } catch (error) {
    next(error); // Pass error to global error handler
  }
});

/**
 * @route GET /api/hotels/:id
 * @desc Get a SINGLE hotel by its unique 'id'
 * @access Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    const hotel = await Hotel.findOne({ id: hotelId }); 

    if (!hotel) {
      return res.status(404).json({ success: false, message: `Hotel ID ${hotelId} not found.` });
    }
    
    res.status(200).json({ success: true, data: hotel });
  } catch (error) {
    next(error);
  }
});

export default router;