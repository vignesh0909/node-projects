const express = require('express');
const bodyparser = require('body-parser');
//const myReqLogger = require('./Utilities/requestLogger');
const route = require('./Routes/routing');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyparser.json());
app.use(cookieParser());
//app.use(myReqLogger);
app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
