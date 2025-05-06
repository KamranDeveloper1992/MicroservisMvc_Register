const express = require("express");
const connectDB = require("../construction/config/db");

const app = express();

app.get("/register", async (req, res) => {
  const db = await connectDB();
  if (db) {
    try {
      const users = db.collection("users");

      const result = await users.insertOne({
        gmail: 'husen45@gmail.com',
        name: 'Husen',
        lastname: 'Vezirov',
        password: 'fakepad',
        createdAt: new Date()
      });

      res.send("User inserted: " + result.insertedId);
    } catch (err) {
      console.error(err);
      res.status(500).send("Mongo insert error!");
    }
  } else {
    res.status(500).send("Mongo connect error!");
  }
});

app.listen(7000, () => {
  console.log("Register Service running on port 7000!");
});
