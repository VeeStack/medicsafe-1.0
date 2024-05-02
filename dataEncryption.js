
const crypto = require('crypto');

// Encrypt data
const algorithm = 'aes-256-cbc';
const key = 'Capstone@103';
const iv = crypto.randomBytes(16); // Initialization vector
const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
let encryptedData = cipher.update('plaintext', 'utf8', 'hex');
encryptedData += cipher.final('hex');

// Decrypt data
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
decryptedData += decipher.final('utf8');

console.log('Encrypted data:', encryptedData);
console.log('Decrypted data:', decryptedData);
