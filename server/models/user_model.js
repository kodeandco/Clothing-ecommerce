import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    unique: true, // can be email or phone number
    match: [
      /^(\+?\d{10,15}|[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,})$/,
      'Please enter a valid email or phone number'
    ]
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

export default User;
