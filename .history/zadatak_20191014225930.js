const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')

const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
// const decodedData = base64.decode(encryptedPdfAsBase64)

// fs.writeFile('decodedPdf.pdf', decodedData, err => {
//     if(err) {
//        return console.log(err)
//     }
//     console.log('file saved!')
// })


// qpdf.decrypt('C:\\zadatak\\decodedPdf.pdf', password, 'C:\\zadatak\\decryptedPdf.pdf');

const doc = qpdf.decrypt('C:\\zadatak\\decodedPdf.pdf', 'YOUR_PASSWORD_TO_DECRYPT_PDF', 'C:\\zadatak\\decryptedPdf.pdf');

doc.stdout.pipe(res);

res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Access-Control-Allow-Origin': '*',
    'Content-Disposition': 'inline; filename=decryptedPdf.pdf'
});