const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
});

module.exports = mongoose.model('User', UserSchema)