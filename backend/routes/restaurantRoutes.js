import express from 'express';
import Restaurant from '../models/Restaurant.js'; // Ensure the path is correct

const router = express.Router();

/**
 * @route GET /api/restaurants
 * @desc Get ALL restaurant data (List View)
 * @access Public
 */
router.get('/', async (req, res, next) => {
  try {
    // Fetch all restaurants, sorting by rating (highest first)
    const restaurants = await Restaurant.find({}).sort({ rating: -1, valueScore: -1 }); 
    
    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching restaurants.' });
  }
});

/**
 * @route GET /api/restaurants/:id
 * @desc Get a SINGLE restaurant by its unique 'id' (Detail View)
 * @access Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findOne({ id: restaurantId }); 

    if (!restaurant) {
      return res.status(404).json({ success: false, message: `Restaurant ID ${restaurantId} not found.` });
    }
    
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching restaurant details.' });
  }
});

export default router;