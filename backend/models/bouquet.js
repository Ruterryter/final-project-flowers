import mongoose from 'mongoose'

const bouquetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Bouquet", bouquetSchema);