import express from 'express';
import Agency from '../models/Agency.js'; // Adjust the import path as necessary

const router = express.Router();

/**
 * @route GET /api/agencies
 * @desc Get ALL popular agencies
 * @access Public
 */
router.get('/', async (req, res, next) => {
  try {
    const agencies = await Agency.find({}).sort({ rating: -1, name: 1 }); // Sort by rating (highest first)
    
    res.status(200).json({
      success: true,
      count: agencies.length,
      data: agencies
    });
  } catch (error) {
    next(error); 
  }
});

/**
 * @route GET /api/agencies/:id
 * @desc Get a SINGLE agency by its unique 'id'
 * @access Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const agency = await Agency.findOne({ id: req.params.id }); 

    if (!agency) {
      // Use standard 404 response
      return res.status(404).json({ success: false, message: `Agency ID ${req.params.id} not found.` });
    }
    
    res.status(200).json({ success: true, data: agency });
  } catch (error) {
    next(error);
  }
});

export default router;