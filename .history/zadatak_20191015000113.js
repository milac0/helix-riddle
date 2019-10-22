const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')
//crypto
const crypto = require('crypto');
const algorithm = 'aes-256-ecb';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
const decodedData = base64.decode(encryptedPdfAsBase64)

fs.writeFile('decodedPdf.pdf', decodedData, err => {
    if(err) {
       return console.log(err)
    }
    console.log('file saved!')
})

// const localPath = path.resolve('decodedPdf.pdf')
// const outputPath = path.join(path.resolve(), 'decryptedPdf.pdf')
// console.log(outputPath)
// qpdf.decrypt(localPath, password, outputPath);
const params = {
    inputFilePath: '/zadatak/decodedPdf.pdf',
    password: "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY=",
    outputFilePath: '/zadatak/encryptedPdf.pdf',
}

