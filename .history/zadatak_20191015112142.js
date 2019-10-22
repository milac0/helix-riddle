const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const fs = require('fs')
const crypto = require('crypto');

//pass in hex 64 char a u base64 44 charc
const key = '3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY='
const keyBuff = Buffer.from(key,'base64')
const cryptedPdf = Buffer.from(encryptedPdfAsBase64,'base64')

const decipher = crypto.createDecipheriv('aes-256-ecb', keyBuff, '')
const decryptedPdf  = Buffer.concat([crypto.update(cryptedPdf), decipher.final()])

fw.writeFile('./rjesenje.pdf', decryptedPdf)
// function decrypt(crypted) {
// 	var decipher,
// 	    result,
// 	    iv;

// 	// Get the iv: the first 16 bytes
// 	iv = crypted.slice(0, 16);

// 	// Get the rest
// 	crypted = crypted.slice(16);

// 	// Create a decipher
// 	decipher = crypto.createDecipheriv('aes-256-ecb', keyhex, '');

// 	// Actually decrypt it
// 	result = Buffer.concat([decipher.update(crypted), decipher.final()]);

// 	return result;
// }

// fs.writeFileSync('./output.pdf', decrypt(crypted));
