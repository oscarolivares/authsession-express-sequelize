const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./db/models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      if (user) {
        user.password = null;
      }
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

// Local strategy
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ where: { email } })
      .then(user => {
        if (!user) return done(null, false, { message: 'User does not exist' });

        user.verifyPassword(password, (err, match) => {
          if (err) return done(err);
          if (!match) return done(null, false, { message: 'Invalid password' });

          user.password = null;
          return done(null, user);
        });
      })
      .catch(err => {
        return done(err);
      });
  })
);
