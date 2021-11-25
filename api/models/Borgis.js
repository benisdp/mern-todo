const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BorgisSchema = new Schema({

	text: {
		type: String,
		required: false
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}

});

const Borgis = mongoose.model("Borgis", BorgisSchema);

module.exports = Borgis;