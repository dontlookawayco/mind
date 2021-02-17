const fs = require('fs')
const express = require('express')

const app = express()

/**
 * Import all the routes dynamicly
 * @param {*} routePath the path to the routes
 * @param {*} prefix what all routes should start with
 */
function processRoutePath (routePath, prefix = '/') {
  fs.readdirSync(routePath).forEach(function (file) {
    const filepath = routePath + '/' + file
    let endpoint = prefix + file.split('.')[0]
    fs.stat(filepath, function (err, stat) {
      if (err) console.error(err)
      if (stat.isDirectory()) {
        processRoutePath(filepath, endpoint + '/')
      } else {
        try {
          if (endpoint.split('/').pop() === 'index') {
            endpoint = endpoint.replace('/index', '')
          }
          console.log(endpoint)
          // Makes it possible to also have api.example.com
          if (endpoint.split('/')[1] === 'api') {
            require(filepath)(app, endpoint.replace('/api', ''))
          }
          require(filepath)(app, endpoint)
        } catch (e) {
          console.log('------------------------------------')
          console.log('Cannot load route ' + filepath)
          console.error(e)
          console.log('------------------------------------')
        }
      }
    })
  })
}

processRoutePath('./routes/')

app.listen(process.env.PORT || 13144, () => {
  console.log('[MIND] Live @ ' + (process.env.PORT || 13144))
})