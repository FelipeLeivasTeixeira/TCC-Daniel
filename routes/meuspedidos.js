var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('meuspedidos', { title: 'Meus Pedidos - ImportAê' });
});

module.exports = router;