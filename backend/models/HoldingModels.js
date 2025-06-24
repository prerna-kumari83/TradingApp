const { model } = require("mongoose");

const HoldingsSchema = require("../schema/HoldingsSchema");

const HoldingModel = model("Holding", HoldingsSchema);

module.exports = { HoldingModel };
