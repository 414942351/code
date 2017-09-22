const express = require('../index');

const app = express();

app.get('/', function(req, res) {
  res.send('success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});