import express from 'express';
import Destination from '../models/Destination.js'; // Ensure the path is correct

const router = express.Router();

/**
 * @route GET /api/destinations
 * @desc Get ALL destinations (List View)
 * @access Public
 */
router.get('/', async (req, res, next) => {
  try {
    // Fetch all destinations, filtering for basic fields if necessary
    const destinations = await Destination.find({}).select('id name description image'); 
    
    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching destinations list.' });
  }
});

/**
 * @route GET /api/destinations/:id
 * @desc Get a SINGLE destination with all nested details
 * @access Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const destinationId = req.params.id;
    const destination = await Destination.findOne({ id: destinationId }); 

    if (!destination) {
      return res.status(404).json({ success: false, message: `Destination ID ${destinationId} not found.` });
    }
    
    res.status(200).json({ success: true, data: destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error fetching destination details.' });
  }
});

export default router;