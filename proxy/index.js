const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./api/indexRouter');

const app = express();
const port = 8001;

app.use(cors());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
