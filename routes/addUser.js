const path = require('path');

const rootDir = require('../utils/path')

const express = require('express');

const router = express.Router();

router.get('/add-user.html', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views', 'add-user.html'))
})

router.post('/add-user.html', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;