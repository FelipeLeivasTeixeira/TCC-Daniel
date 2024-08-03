var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos - ImportAê' });
});

module.exports = router;