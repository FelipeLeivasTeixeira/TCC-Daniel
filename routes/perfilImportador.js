var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('perfilImportador', { title: 'Perfil Importador - ImportAê' });
});

module.exports = router;