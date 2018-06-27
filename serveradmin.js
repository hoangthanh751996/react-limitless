

const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('build'));

// app.get('/', (req, res) => {
//   res.sendFile('/build/index.html');
// });

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(9003, function (err) {
  if (err) return console.log(err);

  console.log('Doithe Adminpage server is up on port ' + 9003);
});
