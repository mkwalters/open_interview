var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var sessionSchema = new Schema({
	'time' : String,
	'duration' : Number,
	'reservation_limit' : Number,
	'reservation_count' : Number,
	'description' : String,
	'name' : String,
	'teacher': String,
	'location': String
});

module.exports = mongoose.model('session', sessionSchema);
