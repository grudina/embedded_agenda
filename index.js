const express = require('express');
const serve   = require('express-static');
 
const app = express();
 
app.use(serve(__dirname));

app.all('*', (req, res) => {
  console.log(req, res)
  res.redirect('*');
});
 
const server = app.listen(3001, function(){
  console.log('server is running at %s', server.address().port);
});
