const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')

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

qpdf.decrypt(params)


