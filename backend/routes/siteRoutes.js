import express from 'express';
import Site from '../models/Site.js'; // Adjust the import path

const router = express.Router();

/**
 * @route GET /api/sites
 * @desc Get ALL popular sites
 * @access Public
 */
router.get('/', async (req, res, next) => {
  try {
    // Fetch all sites, potentially sorting by rating for the 'popular' view
    const sites = await Site.find({}).sort({ rating: -1 }); 
    
    res.status(200).json({
      success: true,
      count: sites.length,
      data: sites
    });
  } catch (error) {
    next(error); // Pass error to global error handler
  }
});

/**
 * @route GET /api/sites/:id
 * @desc Get a SINGLE site by its unique 'id'
 * @access Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const siteId = req.params.id;
    const site = await Site.findOne({ id: siteId }); 

    if (!site) {
      return res.status(404).json({ success: false, message: `Site ID ${siteId} not found.` });
    }
    
    res.status(200).json({ success: true, data: site });
  } catch (error) {
    next(error);
  }
});

export default router;