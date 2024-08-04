var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('chatimportador', { title: 'ChatImportador - ImportAê' });
});

module.exports = router;