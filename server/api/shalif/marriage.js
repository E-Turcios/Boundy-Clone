const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({ marriageStatus: true });
});
module.exports = router;
