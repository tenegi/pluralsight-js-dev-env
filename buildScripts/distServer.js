import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
{"id":1, "firstName":"Bob", "lastName":"Smith","email":"bob@gmail.com"},
{"id":2, "firstName":"Lyndon", "lastName":"Hills","email":"john@tenegi.com"},
{"id":3, "firstName":"John", "lastName":"Jones","email":"jj@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
