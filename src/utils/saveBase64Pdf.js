const path = require('path')
const fs = require('fs').promises

async function saveBase64Pdf (base64Pdf) {
  const bitmap = new Buffer.from(base64Pdf, 'base64')
  return fs.writeFile(path.join(__dirname, '/doc-encrypted.pdf'), bitmap)
}

module.exports = saveBase64Pdf
