const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const db = require(path.join(__dirname, '../db/deal_descriptions'));
const descripFilepath = path.join(__dirname, '../public');

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

// // // serve static page (originally)
// app.use(express.static(path.join(__dirname, '../public')));

// from Christian's
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(descripFilepath));
app.use('/:id', express.static(descripFilepath));

/* added the GET/app.js API call in below as found similarly in Alec's server API library.
My bundle.js file doesn't get expressed properly this way unfortunately, and also I am serving the logos and images on the page from an associate public/image file.
Find above, the static serving API call that was working before if this is helpful.
*/
// respond to global endpoint app.js request
app.get('/app.js', (req, res) => {
  res.sendFile(descripFilepath);
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
