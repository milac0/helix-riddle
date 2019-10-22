const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')
var utf8 = require('utf8');
const atob = require('atob')
//crypto
const crypto = require('crypto');
const algorithm = 'aes-256-ecb';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(2);
// const decodedPdf = require('./decodedPdf.txt')


const password = "3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY="

function base64toHEX(base64) {
    var raw = atob(base64);
      var HEX = '';
      for ( i = 0; i < raw.length; i++ ) {
        var _hex = raw.charCodeAt(i).toString(16)
        HEX += (_hex.length==2?_hex:'0'+_hex);
      }
    return HEX.toUpperCase();
    }

const cryptedPdf = base64toHEX(encryptedPdfAsBase64)

// fs.writeFile('cryptedPdf.txt', cryptedPdf, err => {
//     if(err) {
//        return console.log(err)
//     }
//     console.log('file saved!')
// })

var key = new Buffer(password, 'hex')
var encrypted = new Buffer(cryptedPdf, 'hex')
var decipher = crypto.createDecipheriv('aes-256-ecb', key, '');
decipher.setAutoPadding(false);
var dec = decipher.update(encrypted).toString('hex')                             
dec += decipher.final().toString('hex');       

var buffer = new Buffer(dec, "binary");                                          
fs.writeFileSync('./output.pdf', buffer);  

