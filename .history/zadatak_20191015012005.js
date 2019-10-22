const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')
var utf8 = require('utf8');
const atob = require('atob')
//crypto
const crypto = require('crypto');

var utf8encoded = (new Buffer(encryptedPdfAsBase64, 'base64')).toString('utf8');

fs.writeFile('cryptedPdf.txt', utf8encoded, err => {
    if(err) {
       return console.log(err)
    }
    console.log('file saved!')
})

// var key = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="
// var encrypted = new Buffer(cryptedPdf, 'hex')
// var decipher = crypto.createDecipheriv('aes-256-ecb', key, '');
// decipher.setAutoPadding(false);
// var dec = decipher.update(encrypted).toString('hex')                             
// dec += decipher.final().toString('hex');       

// var buffer = new Buffer(dec, "binary");                                          
// fs.writeFileSync('./output.pdf', buffer);  

