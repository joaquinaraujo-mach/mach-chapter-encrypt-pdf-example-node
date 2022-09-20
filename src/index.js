const path = require('path')
const fs = require('fs').promises
const Processor = require('./processor')
const temporalSource = path.join(__dirname, './in-memory/doc.pdf')
const temporalDestination = path.join(__dirname, './in-memory/doc-encrypted.pdf')

async function encryptPdf (base64Pdf, {
  username,
  password
}) {
  const bitmap = new Buffer.from(base64Pdf, 'base64')

  await fs.writeFile(temporalSource, bitmap)

  const processor = new Processor(username, password)
  await processor.encrypt(temporalSource, temporalDestination)

  return fs.readFile(temporalDestination, { encoding: 'base64' })
}

module.exports = encryptPdf
