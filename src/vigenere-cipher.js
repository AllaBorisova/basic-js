const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let cypher = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];

      if (currentLetter.charCodeAt() >= 65 && currentLetter.charCodeAt() <= 90) {
        let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (currentLetter.charCodeAt() >= 97 && currentLetter.charCodeAt() <= 122) {
        let lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    // console.log(cypher.toUpperCase());
    return cypher.toUpperCase();
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    // var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
    // var decryptencryptedMessage = "";
    // for (var i = 0; i < encryptedMessage.length; i++) {
    //   decryptencryptedMessage += alphabet.charAt(((alphabet.indexOf(encryptedMessage.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i % key.length))) % alphabet.length);
    // }
    // return decryptencryptedMessage;
    // let orig_text = "";

    // for (let i = 0; i < encryptedMessage.length; i++) {
    //   // converting in range 0-25
    //   let x = (encryptedMessage[i].charCodeAt(0) -
    //     key[i].charCodeAt(0) + 26) % 26;

    //   // convert into alphabets(ASCII)
    //   x += 'A'.charCodeAt(0);
    //   orig_text += String.fromCharCode(x);
    // }
    // return orig_text;

    // let result = ''

    // for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
    //   const c = encryptedMessage.charAt(i)
    //   if (c.length === 1 && c.match(/[a-zA-Z]/i)) {
    //     if (c === c.toUpperCase()) {
    //       result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
    //     } else {
    //       result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
    //     }
    //   } else {
    //     result += c
    //   }
    //   j = ++j % key.length
    // }
    // return result
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
