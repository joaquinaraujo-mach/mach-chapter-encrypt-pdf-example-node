const exec = require('child_process').exec

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

module.exports = Processor
