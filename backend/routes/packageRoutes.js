import express from 'express';
import Package from '../models/Package.js'; // Adjust path as necessary

const router = express.Router();

/**
 * @route GET /api/packages
 * @desc Get ALL popular packages
 * @access Public
 */
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find({}); // Find all packages
    
    // Respond with a success status and the data
    res.status(200).json({
      success: true,
      count: packages.length,
      data: packages
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Server Error fetching packages.' });
  }
});

/**
 * @route GET /api/packages/:id
 * @desc Get a SINGLE popular package by its unique 'id'
 * @access Public
 */
router.get('/:id', async (req, res) => {
  try {
    // Find a package by the 'id' field
    const packageId = req.params.id;
    const pkg = await Package.findOne({ id: packageId }); 

    if (!pkg) {
      return res.status(404).json({ success: false, message: `Package with ID ${packageId} not found.` });
    }
    
    res.status(200).json({ success: true, data: pkg });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Server Error fetching package detail.' });
  }
});

export default router;