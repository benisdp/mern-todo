const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = { 
	type: String,
	required: true
}

const notReqString = {
	type: String,
	require: false
}

const UserSchema = new Schema({

	name: reqString,
	guardId: reqString,
	phoneNumber: notReqString,
	timestamp: {
		type: String,
		default: Date.now()
	},
	textHistory: [String]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;