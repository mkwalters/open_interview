var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reservationSchema = new Schema({
	'email' : String
});

module.exports = mongoose.model('reservation', reservationSchema);
