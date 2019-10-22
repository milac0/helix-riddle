const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')

const encodedData = base64.encode(encryptedPdfAsBase64)
console.log(encodedData)