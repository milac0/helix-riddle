const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')
var utf8 = require('utf8');
//crypto
const crypto = require('crypto');
const algorithm = 'aes-256-ecb';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(2);
// const decodedPdf = require('./decodedPdf.txt')


const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
const decodedData = base64.decode(encryptedPdfAsBase64)
// const text = utf8.decode(decodedData)
// console.log(text)

fs.writeFile('decodedPdf.txt', decodedData, err => {
    if(err) {
       return console.log(err)
    }
    console.log('file saved!')
})

var decipher = crypto.createDecipher('aes-256-ecb', password, '');
decipher.setAutoPadding(false);
var dec = decipher.update(decodedData,'base64','utf8');                               
dec += decipher.final('utf8');       

var buffer = new Buffer(dec, "binary");                                          
fs.writeFileSync('./output.pdf', buffer);  