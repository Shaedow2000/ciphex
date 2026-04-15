const { encrypt, decrypt, generateKeys } = require("./index");

sample = "aaaaaaaaaaaaaaaa";
keys = generateKeys();
encryptedtext = encrypt(sample, keys);
decryptedtext = decrypt(encryptedtext, keys);
console.log(sample);
console.log(keys);
console.log(encryptedtext);
console.log(decryptedtext);
