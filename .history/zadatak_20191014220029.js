const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')

console.log(encryptedPdfAsBase64)
const encodedData = base64.decode(encryptedPdfAsBase64)
// const options = {
//     keyLength: 256,
//     password: "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
// }

// qpdf.encrypt(localFilePath, options);
console.log(encodedData)