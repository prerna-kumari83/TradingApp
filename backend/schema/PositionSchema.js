const { Schema } = require("mongoose");

const PositionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = PositionSchema;
// module.exports = { PositionSchema };    //wrong way to export as it will not be a schema.
