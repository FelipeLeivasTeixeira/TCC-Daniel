var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Cadastro de Cliente - ImportAê' });
});

module.exports = router;