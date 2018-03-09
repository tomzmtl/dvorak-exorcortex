const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const hbsHelpers = require('./helpers/handlebars');
const state = require('./state');

const app = express();
const hbs = expressHandlebars.create({
  extname: '.hbs',
  helpers: hbsHelpers,
});

const PORT = process.env.PORT || 3000;

// handlebars
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.use('/public', express.static(path.join(__dirname, '../../dist')));

app.get('/favicon.ico', (req, res) =>
  res.status(200).set({ 'Content-Type': 'image/x-icon' }).send()
);

app.get('*', (req, res) => {
  res.render('index', {
    state: JSON.stringify(state),
  });
});

app.listen(PORT, () => {
  console.log('Spark listening on port 3000!'); // eslint-disable-line
});
