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

//pass in hex 64 char a u base64 44 charc
var key = '3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY='
var keyhex = Buffer.from(key,'base64')
const crypted = Buffer.from(encryptedPdfAsBase64,'base64')


var decipher = crypto.createDecipheriv('aes-256-ecb', keyhex, crypto.randomBytes(16));
decipher.setAutoPadding(false);
//update vraca Buffer jer nije specificiran 3. arg
var dec = decipher.update(crypted)   
// If outputEncoding is specified, a string is returned. If an outputEncoding is not provided, a Buffer is returned.                         
dec += decipher.final()     
console.log(dec)
                                        
fs.writeFileSync('./output.pdf', dec);  

// function decrypt(buffer){
//     var decipher = crypto.createDecipher('aes-256-ecb',keyhex)
//     var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
//     return dec;
//   }
   
//   console.log(decrypt(crypted).toString('utf8'));