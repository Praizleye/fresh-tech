const mongoose = require("mongoose");
const baseSchema = require("./base.schema");

const electricitySchema = new mongoose.Schema(...baseSchema, {
  timestamps: true,
});
module.exports = mongoose.model("Airtime", electricitySchema);
