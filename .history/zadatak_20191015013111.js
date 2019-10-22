const base64 = require('base-64')
const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const qpdf = require('node-qpdf')
const path = require('path')
const fs = require('fs')
var utf8 = require('utf8');
const atob = require('atob')
//crypto
const crypto = require('crypto');

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

console.log(base64toHEX('3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY='))
//pass in hex 64 char a u base64 44 charc
var key = "dd39ab2bf81e87cc1f75955130f7802dca5984deca00e39f5c271486d597e466"
console.log(key.length)

// var decipher = crypto.createDecipheriv('aes-256-ecb', key, '');
// decipher.setAutoPadding(false);
// //update vraca Buffer jer nije specificiran 3. arg
// var dec = decipher.update(cryptedPdf, 'hex')   
// // If outputEncoding is specified, a string is returned. If an outputEncoding is not provided, a Buffer is returned.                         
// dec += decipher.final().toString('hex');       

// var buffer = new Buffer(dec, "binary");                                          
// fs.writeFileSync('./output.pdf', buffer);  

