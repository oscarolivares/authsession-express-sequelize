/**
 * Module for passwords encryption
 *
 * Generate the hash based on the incomming param (in this case "password")
 *
 * Returns a promise that resolves in the hash
 */

const bcrypt = require('bcrypt');

module.exports = function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS) || 10;

    bcrypt.genSalt(rounds, (err, salt) => {
      if (err) {
        return reject(new Error('Error during password salt creation'));
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return reject(new Error('Error during password hash creation'));
        }
        return resolve(hash);
      });
    });
  });
};
