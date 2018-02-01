const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.set('port', 8000);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

let port = 8000;

app.listen(app.get('port'), () => {
  console.log('listening on port ' + port);
});
