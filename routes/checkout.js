var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('checkout', { title: 'Checkout - ImportAê' });
});

module.exports = router;