module.exports = {
  cookieMaxDays: process.env.COOKIE_MAX_DAYS || 30,
  passwordRestriction: process.env.PASSWORD_RESTRICTION || 'strong'
};
