const bcrypt = require('bcrypt');
const hashPassword = require('../../helpers/hashPassword');

('use strict');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          min: 8
        }
      },
      role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user', 'guest'],
        defaultValue: 'user'
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      firstName: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    },
    {}
  );

  /* Instance level methods */

  // Instance method for password comparations when user try to login
  User.prototype.verifyPassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, match) => {
      if (err) {
        return cb(err);
      } else {
        return cb(null, match);
      }
    });
  };

  /* Hooks */

  // Hook before create: To replace the raw password with its hash
  User.beforeCreate((user, options) => {
    console.log('--------------------On beforeCreate-------------------');

    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });

  // Hook before update: To replace the new password with its hash only if the password is changed
  User.beforeUpdate((user, options) => {
    console.log('--------------------On beforeUpdate-------------------');

    if (user.changed('password')) {
      return hashPassword(user.password).then(hashedPw => {
        user.password = hashedPw;
      });
    }
  });

  /* Others */

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
