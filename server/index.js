const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();

let app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use('/', router);

let port = process.env.PORT || 8000;

app.listen(app.get('port'), () => {
  console.log('listening on port ' + port);
});
