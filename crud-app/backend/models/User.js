const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	name: {
		type: String
	},
	id: {
		type: Number,
		unique: true
	},
	points: {
		type: Number
	}
}, {
	collection: 'users'
})

userSchema.index({id: 1}, {unique: true});

module.exports = mongoose.model('User', userSchema);