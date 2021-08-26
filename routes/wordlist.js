'use strict';
const express = require('express');
const router = express.Router();
const Word = require('../models/word');

router.get('/', function(req, res, next) {
  Word.findAll({
    order: [['updatedAt', 'DESC']]
  }).then((word) => {
    res.render('word-list', {
      words: word
    });
  });
});

module.exports = router;