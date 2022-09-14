# mach-chapter-encrypt-pdf

## How can you use it?

* docker build --rm -t mach-encrypt-pdf:latest .
* docker run --rm -it -v $PWD:/root/code mach-encrypt-pdf node src

## Example
The base64Pdf would be "PDF", encryptedBase64Pdf would be "Encrypted PDF"
````
const encryptedBase64Pdf = await encryptBase64Pdf(base64Pdf, {
  username: 'mach',
  password: '1234'
})
````
