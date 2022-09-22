const path = require('path')
const fs = require('fs').promises
const exec = require('child_process').exec
const temporalSource = path.join(__dirname, './in-memory/doc.pdf')
const temporalDestination = path.join(__dirname, './in-memory/doc-encrypted.pdf')

class Processor {
  constructor(
    password,
    username
  ) {
    this.password = password
    this.username = username
  }

  async encrypt(orgfilepath, newfilepath) {
    return this.process('encrypt', orgfilepath, newfilepath)
  }

  async process(method, orgfilepath, newfilepath) {
    const encryptCommand = `qpdf --${method} ${this.username} ${this.password} 40 -- ${orgfilepath} ${newfilepath}`

    return new Promise((resolve, reject) => {
      exec(encryptCommand, error =>
        error ?
          reject({
            error: true,
            message: error
          }) : resolve({
            error: false,
            message: `PDF ${method}ed successfully`
          })
      )
    })
  }
}

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

async function handler ({
  base64Pdf,
  username,
  password
}) {
  const encryptedBase64Pdf = await encryptPdf(base64Pdf, {
    username,
    password
  })

  return {
    encryptedBase64Pdf
  }
}

module.exports = handler
