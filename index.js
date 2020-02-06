const issues = require("./routes/issues");
const admins = require("./routes/admins");
const cars = require("./routes/cars");
const companies = require("./routes/companies");
const companiesHistory = require("./routes/companiesHistory");

const swaggerDoc = require("./swaggerDoc");
const mongodbDriver = require("./databases/mongoDB");
const dbDriver = require("./databases/dbDriver");

const express = require("express");
const app = express();

dbDriver.connectDriver(mongodbDriver.connectMongoDB()); // Connecting to mongoDB driver ...

app.use(express.json());
app.use("/api/admins", admins);
app.use("/api/cars", cars);
app.use("/api/companies", companies);
app.use("/api/companiesHistory", companiesHistory);
app.use("/api/issues", issues);
swaggerDoc(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
