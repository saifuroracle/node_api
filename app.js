const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(process.env.APP_PORT||3000, () => {
  console.log(`App is running on port ${process.env.APP_PORT}.`);
});
