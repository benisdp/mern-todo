const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

	name: {
		type: String,
		required: true
	},
	guardId: {
		type: String,
		default: true
	},
	phoneNumber: {
		type: String,
		required: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}

});

const User = mongoose.model("User", UserSchema);

module.exports = User;