const router = require('express').Router();

router.get('/', (req, res) => {
  const boundary = { boundy: 'youre welcome' };
  res.send(boundary);
});

router.get('/eddie', (req, res) => {
  const boundary = { eddie: 'is awesome' };
  res.send(boundary);
});

module.exports = router;
