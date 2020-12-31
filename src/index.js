const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// import MVC
const route = require('./routers');

// dùng file static (img)

app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));
//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));
// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
