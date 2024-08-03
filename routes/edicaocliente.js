var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('edicaocliente', { title: 'Edicao de Cliente - ImportAê' });
});

module.exports = router;