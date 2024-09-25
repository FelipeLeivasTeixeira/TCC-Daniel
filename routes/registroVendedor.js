var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('registroImportador', { title: 'Cadastro de Importador - ImportAê' });
});

module.exports = router;