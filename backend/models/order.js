import mongoose from 'mongoose'

const Schema = mongoose.Schema

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped'],
    default: 'Pending'
  }
})


module.exports = mongoose.model("Order", OrderSchema);