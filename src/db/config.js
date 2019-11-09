module.exports = {
  development: {
    username: 'dev',
    password: 'dev',
    database: 'dev',
    host: '127.0.0.1',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT0'
    }
  },
  test: {
    username: 'test',
    password: 'test',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT0'
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT0'
    }
  }
};
