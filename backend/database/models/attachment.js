const mongoose = require('mongoose')

const AttachmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  content: {
    type: String,
    required: true
  },
  fileLocation: {
    type: String,
    required: true
  },
  storageType: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('attachment', AttachmentSchema)
