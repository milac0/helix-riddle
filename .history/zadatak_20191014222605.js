const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')

const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
const decodedData = base64.decode(encryptedPdfAsBase64)

fs.writeFile('decodedPdf', decodedData, err => {
    if(err) {
        console.log(err)
    }
    console.log('file saved!')
})

// console.log(path.dirname())
qpdf.decrypt('/decodedPdf', password, '/newFile');
// console.log(decodedData)