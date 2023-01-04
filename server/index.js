const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use('/api', require('./api'));

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
