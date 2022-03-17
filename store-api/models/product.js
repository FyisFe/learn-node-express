const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must provide a name for the product'],
  },
  price: {
    type: Number,
    required: [true, 'You must provide a price for the product'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enums: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: 'Invalid company name',
    },
  },
})

module.exports = mongoose.model('Product', ProductSchema)
