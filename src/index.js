require('dotenv').config();
const express = require('express');
const db = require('./db/models/index');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');

require('./passport');

const app = express();

app.set('port', process.env.PORT || 3000);

// Sequelize store
var myStore = new SequelizeStore({
  db: db.sequelize
});

// Express-session middleware with sequelize store
app.use(
  session({
    secret: process.env.SECRET || 'secret',
    resave: false,
    saveUninitialized: true,
    store: myStore
  })
);

// sync sequelize store: auto create the database table (if not exist)
// use the option "force" to drop and create the table again "myStore.sync({ force: true })"
myStore.sync();

// sync User model
db.User.sync();

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Ready');
});

app.use('/auth', authRoutes);

// Status 404 handler
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listener
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
