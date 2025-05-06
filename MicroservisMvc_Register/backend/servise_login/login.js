const express = require("express");
const connectDB = require("../construction/config/db");
const app = express();

app.use(express.json());

app.get("/login/:gmail", async (req, res) => {
  const { gmail } = req.params;

  if (!gmail) {
    return res.status(400).json({ error: "Gmail is required" });
  }

  try {
    const db = await connectDB();
    const user = await db.collection("users").findOne({ gmail });

    if (user) {
      res.send(`Gmail (${gmail}) girişi olundu`);
    } else {
      res.status(401).send(`Bele bir gmail (${gmail}) tapilmadi`);
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server Error");
  }
});

app.listen(5000, () => {
  console.log("Login Service running on port 5000!");
});
