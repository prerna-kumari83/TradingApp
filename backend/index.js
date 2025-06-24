require("dotenv").config(); //it will get the process

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { HoldingModel } = require("./models/HoldingModels");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("mongodb connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

app.get("/allPosition", async (req, res) => {
  let allPosition = await PositionModel.find({});

  res.json(allPosition);
});
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHolding = await HoldingModel.find({});

  res.json(allHolding);
});

app.post("/allorder", async (req, res) => {
  let allData = new OrderModel({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
  });
  await allData.save().then(() => {
    console.log("saved");
    res.send("done!");
  });
});

app.listen(port, () => {
  console.log("server is running on port 3002");
});
