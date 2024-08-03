var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('adicionarproduto', { title: 'Adicionar Produto - ImportAê' });
});

module.exports = router;