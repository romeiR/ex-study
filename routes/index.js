var express = require('express');
var router = express.Router();
const uuid =  require('uuid');
const Word = require('../models/word');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next) {
  const wordId = uuid.v4();
  const updatedAt = new Date();
  Word.create({
    wordId: wordId,
    wordQ: req.body.wordQ,
    wordA: req.body.wordA,
    wordDescription: req.body.wordDescription,
    updatedAt: updatedAt
  }).then((word) => {
    console.log(word);
  });
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
