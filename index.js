const issues = require("./routes/issues");
const admins = require("./routes/admins");
const cars = require("./routes/cars");
const companies = require("./routes/companies");
const companiesHistory = require("./routes/companiesHistory");

const mongodbDriver = require("./databases/mongoDB");
const dbDriver = require("./databases/dbDriver");

const express = require("express");
const app = express();

dbDriver.connectDriver(mongodbDriver.connectMongoDB()); // Connecting to mongoDB driver ...

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/Taxi-api/admins", admins);
app.use("/Taxi-api/cars", cars);
app.use("/Taxi-api/companies", companies);
app.use("/Taxi-api/companiesHistory", companiesHistory);
app.use("/Taxi-api/issues", issues);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
