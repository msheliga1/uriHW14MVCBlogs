const router = require('express').Router();

console.log("Starting to load controllers/index.js routes.");
console.info("Starting to load controllers/index.js routes.");
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
