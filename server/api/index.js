const router = require('express').Router();

router.use('/boundy', require('./boundy'));
router.use('/shalif', require('./shalif'));
module.exports = router;
