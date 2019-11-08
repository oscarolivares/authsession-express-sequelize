'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@mail.com',
          password: 'Admin123..',
          firstName: 'John',
          lastName: 'Doe',
          role: 'admin',
          enabled: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'user@mail.com',
          password: 'User123..',
          firstName: 'Jimmy',
          lastName: 'Carter',
          role: 'user',
          enabled: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'guest@mail.com',
          password: 'Guest123..',
          firstName: 'Elizabeth',
          lastName: 'Taylor',
          role: 'guest',
          enabled: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
