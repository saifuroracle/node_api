const express = require("express");
const bodyParser = require("body-parser");
var multer = require('multer');
var forms = multer();


const app = express();


// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(forms.array()); 
app.use(express.static('public'));


// app.post('/post-test', (req, res) => {
//     console.log('Got body:', req.body);
//     res.sendStatus(200);
// });

// routes
require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log(`App is running on port ${process.env.APP_PORT}.`);
});
