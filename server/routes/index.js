var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	consoloe.log('sending')
  res.sendFile('../views/index.html', {root: __dirname});
});

module.exports = router;
