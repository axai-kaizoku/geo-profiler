import mongoose from 'mongoose';

const { Schema } = mongoose;

const profileSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	photo: {
		type: Buffer,
		contentType: String,
	},
	description: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	interests: {
		type: [String],
		required: true,
	},
	latAndLong: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.models.Profile ||
	mongoose.model('Profile', profileSchema);
