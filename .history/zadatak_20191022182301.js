const encryptedPdfAsBase64 = require('./encryptedPdfAsBase64')
const fs = require('fs')
const crypto = require('crypto');

const key = '3TmrK/geh8wfdZVRMPeALcpZhN7KAOOfXCcUhtWX5GY='
const keyBuff = Buffer.from(key,'base64')
const cryptedPdf = Buffer.from(encryptedPdfAsBase64,'base64')

const decipher = crypto.createDecipheriv('aes-256-ecb', keyBuff, '')
const decryptedPdf = Buffer.concat([decipher.update(cryptedPdf), decipher.final()])

fs.writeFileSync('./rjesenje.pdf', decryptedPdf)
