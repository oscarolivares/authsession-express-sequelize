module.exports = {
  // Node enviorement: development | test | production
  env: process.env.NODE_ENV || 'development',
  // Server port
  port: process.env.PORT || 3000,
  // Session encryption secret
  secret: process.env.SECRET || 'secret',
  // Number of rounds for Blowfish algorithm for hashing user password
  rounds: process.env.BCRYPT_ROUNDS || 10,
  // Session cookie expirations days if remember is set to true
  cookieMaxDays: process.env.COOKIE_MAX_DAYS || 30,
  // Password strength restriction: strong | regular | weak
  passwordRestriction: process.env.PASSWORD_RESTRICTION || 'strong'
};
