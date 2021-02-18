import { v4 as uuidv4 } from 'uuid'
const mongoose = require('mongoose')

const AttachmentSchema = mongoose.Schema({
  // The name of the file. This will be at the top of the image. Can be used to easily search through
  // the files.
  title: {
    type: String,
    required: true
  },
  // If the memory needs to be publicly accessable through a link, still needs a way to decrypt it
  // That will be added later in the process, it'll required the client to decrypt the content and
  // re-encrypt it with a different type of key. The hash of that key will be stored here.
  public: {
    type: Boolean,
    required: true,
    default: false
  },
  // The hash of the key needed to decrypt this file. This is used as a way to prevent the file from
  // being downloaded off the server if the person has the wrong link.
  contentKeyHash: {
    type: String,
    required: false
  },
  // The id of the file, that can be used as a publicly sharable link. It uses an UUID type 4 random key.
  documentId: {
    type: String,
    required: true,
    default: uuidv4,
    unique: true
  },
  // The contents of the file, can be base.
  content: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('attachment', AttachmentSchema)
