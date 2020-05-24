const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const jsonServer = require('json-server');
const router = jsonServer.router('db.json');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//rewriting json server response
router.render = (req, res) => {
  res.jsonp({
    payload: res.locals.data
  })
}

//using jsonServer over API
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

