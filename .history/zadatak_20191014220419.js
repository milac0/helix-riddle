const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')

const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
const encodedData = base64.decode(encryptedPdfAsBase64)


qpdf.decrypt(localFilePath, password, outputFilePath);
console.log(encodedData)