const mongoose = require("mongoose");
const baseSchema = require("./base.schema");

const airtimeSchema = new mongoose.Schema(...baseSchema, { timestamps: true });
module.exports = mongoose.model("Airtime", airtimeSchema);
