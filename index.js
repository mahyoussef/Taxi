const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/taxiData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to mongodb..."))
  .catch(err => console.error("Cannot connect to mongodb...", err));

async function createUser() {
  const user = new User({
    username: "MahmoudYoussef97",
    password: "123",
    email: "mahmoud@gmail.com",
    wallet: 200.28,
    address: { country: "Cairo", city: "Tanta", street: "Anwar St" },
    dateOfBirth: new Date("1997-04-27"),
    phone: "01229728943",
    image: null
  });

  const result = await user.save();
  console.log(result);
}
