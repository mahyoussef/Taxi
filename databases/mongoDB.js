const mongoose = require("mongoose");

exports.connectMongoDB = async () => {
  mongoose
    .connect("mongodb://localhost/taxiData", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to mongodb..."))
    .catch(err => console.error("Cannot connect to mongodb...", err));
};
