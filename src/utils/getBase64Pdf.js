const path = require('path')
const fs = require('fs').promises

async function getBase64Pdf () {
  return fs.readFile(path.join(__dirname, '/doc.pdf'), {
    encoding: 'base64'
  })
}

module.exports = getBase64Pdf
