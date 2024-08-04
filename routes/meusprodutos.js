var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('meusprodutos', { title: 'Meus Produtos- ImportAê' });
});

module.exports = router;