const express = require('express');
const path = require('path');

const app = express();
const db = require(path.join(__dirname, '../db/deal_descriptions'));

const PORT = 3002;

// logger
// all get requests
app.use('/', (req, res, next) => {
  console.log(`globalEndPt -> Request Type: ${req.method} Request URL: ${req.originalUrl}`);
  next();
});
// description info requests
app.use('/deal/:deal_id/description', (req, res, next) => {
  console.log(`dealDescripEndPt -> Req.Type: ${req.method} | Req.URL: ${req.originalUrl} | Req.param[strgfyd] ${JSON.stringify(req.params)}`);
  next();
});

// serve static page
app.use(express.static(path.join(__dirname, '../public')));

// respond to global endpoint hits
app.get('/', (req, res) => {
  res.send('Hello World');
});

// entire table response to description endpoint hits
app.get('/deal/table_max', (req, res, next) => {
  db.dealTableMaxRecord((e, s) => res.send(s));
});

// respond to description endpoint hits with an array containing a single object with all relevant information
app.get('/deal/:deal_id/description', (req, res, next) => {
  const deal_id = req.params.deal_id;
  db.getDescriptionData(deal_id, (e, s) => res.send(s));
});
// if deal_id is too high, return empty array
// if deal_id is text, console log error on server
// deal_id MUST be number

// set server to listen
app.listen(PORT, () => console.log(`Listening on port ${PORT} to descriptions_server.`));
