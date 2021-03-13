const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');
app.set('view','./views');

app.use('/public',express.static('./public'));


app.listen(3000, () => {
  console.log(`Server running/`);
});
