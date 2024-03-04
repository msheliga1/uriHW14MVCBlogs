const router = require('express').Router();

console.info("Starting to load controllers/index.js routes. Works in Blogs repo, but not in blog_ repo.");
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
