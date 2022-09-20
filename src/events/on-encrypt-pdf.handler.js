const path = require('path')
const fs = require('fs').promises
const getBase64Pdf = require('../utils/getBase64Pdf')
const encryptBase64Pdf = require('../index')
const saveBase64Pdf = require('../utils/saveBase64Pdf')

async function handler () {
  await fs.mkdir(path.join(__dirname, '../in-memory'), { recursive: true })

  const base64Pdf = await getBase64Pdf()

  try {
    const encryptedBase64Pdf = await encryptBase64Pdf(base64Pdf, {
      username: 'mach',
      password: '1234'
    })

    await saveBase64Pdf(encryptedBase64Pdf)
  } catch (error) {
    console.log(error)
  }
}

handler()

module.exports = handler
