import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
