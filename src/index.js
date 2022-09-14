const getBase64Pdf = require('./utils/getBase64Pdf')
const encryptBase64Pdf = require('./encrypt-base64-pdf')
const saveBase64Pdf = require('./utils/saveBase64Pdf')

async function main() {
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

main()
