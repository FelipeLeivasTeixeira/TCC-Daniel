var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('painel', { title: 'Painel do Importador - ImportAê' });
});

module.exports = router;