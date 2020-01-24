var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reservationSchema = new Schema({
	'email' : String,
	'session_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'session'
	}
});

module.exports = mongoose.model('reservation', reservationSchema);
