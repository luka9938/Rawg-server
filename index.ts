import express from "express";
import dbConnect from "./startup/dbConnect";
import "dotenv/config";
import todoRouter from "./routers/todoRouter";

dbConnect();

const app = express();
app.use(express.json());
app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
