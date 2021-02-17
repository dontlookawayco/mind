const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
  // The name of the user, can be added as a stamp to the document.
  name: {
    type: String,
    required: false,
    default: 'You'
  },
  // Extra information regarding the user.
  about: {
    type: String,
    required: false
  },
  authentication: {
    // The way the person likes to authenticate
    // This needs to be checked first before proceding to what login needs to be checked.
    type: {
      type: String,
      required: true,
      default: 'USERNAME_PASSWORD'
    },
    // The username defined by the user.
    username: {
      type: String,
      required: false,
      unique: true
    },
    // The password defined by the user
    password: {
      type: String,
      required: false
    },
    // The hash of a self defined authentication key
    authenticationKeyHash: {
      type: String,
      required: false
    },
    // The hash of the password generated with Dice Ware.
    diceWareHash: {
      type: String,
      required: false
    }
  },
  security: {
    // The birthdate of the user, can be used to confirm login.
    birthdateCheck: {
      type: Date,
      required: false
    },
    // If the person wants to have two factor through email, that's possible.
    twoFactorEmail: {
      type: String,
      required: false
    },
    // If the person wants two factor through phone, that's possible.
    twoFactorPhoneNumber: {
      type: String,
      required: false
    }
  }
}, { timestamps: true })

module.exports = mongoose.model('person', PersonSchema)
