const mongoose = require('mongoose')

const modelsInOrder = ['user', 'attachment', 'memory']

/**
 * Inits the connection with the database.
 */
async function init () {
  loadModels()
  await mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  console.log('[MONGO] Connected to the database')
}

/**
 * Load all the database models, makes them globally accessable.
 */
async function loadModels () {
  for (let i = 0; i < modelsInOrder.length; i++) {
    const element = modelsInOrder[i]
    await require('./models/' + element)
  }
}

module.exports = init
