var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('meuspedidosimportador', { title: 'Meus Pedidos - ImportAê' });
});

module.exports = router;