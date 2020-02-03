const mongoose = require("mongoose");
const issues = require("./routes/issues");
const admins = require("./routes/admins");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/taxiData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch(err => console.error("Cannot connect to mongodb...", err));

app.use(express.json());
app.use("/api/admins", admins);
app.use("/api/issues", issues);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
