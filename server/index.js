require('dotenv').config({ path: __dirname + '/../.env'});
require('./../database/index');


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./api/indexRouter');
const prodManifestationRouter = require('./api/production/manifestationRouter');
const prodSupportRouter = require('./api/production/supportRouter');
const devGoalRouter = require('./api/test/goalRouter');


const app = express();
const port = 8001;

app.use(cors());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(`${__dirname}/../public`));
app.use('/static/test', express.static(`${__dirname}/static-assets/test-images`));

app.use('/', indexRouter);
app.use('/prod/manifestation', prodManifestationRouter);
app.use('/prod/support', prodSupportRouter);
app.use('/test/goals', devGoalRouter);


app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
