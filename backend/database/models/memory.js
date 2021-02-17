import { v4 as uuidv4 } from 'uuid'
const mongoose = require('mongoose')

const MemorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  documentId: {
    type: String,
    required: true,
    default: uuidv4,
    unique: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('memory', MemorySchema)
