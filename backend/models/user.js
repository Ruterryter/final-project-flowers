import mongoose from 'mongoose'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  },
  address: {
    type: String,
    required: false
  },
  zipCode: {
    type: Number,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: Number,
    required: false
  }
})

module.exports = mongoose.model("User", userSchema);