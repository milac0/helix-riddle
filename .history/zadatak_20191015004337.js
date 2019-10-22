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
const iv = crypto.randomBytes(16);
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

// const localPath = path.resolve('decodedPdf.pdf')
// const outputPath = path.join(path.resolve(), 'decryptedPdf.pdf')
// console.log(outputPath)
// qpdf.decrypt(localPath, password, outputPath);
// function decrypt(text) {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
//     let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
//    }

//    console.log(decrypt())

var decipher = crypto.createDecipher('aes-256-ecb', password);
var dec = decipher.update(decodedData,'hex','binary');                               
dec += decipher.final('binary');       

var buffer = new Buffer(dec, "binary");                                          
fs.writeFileSync('./output.pdf', buffer);  