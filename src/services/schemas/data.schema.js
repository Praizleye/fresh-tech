const mongoose = require("mongoose");
const baseSchema = require("./base.schema");

const dataSchema = new mongoose.Schema(...baseSchema, { timestamps: true });
module.exports = mongoose.model("Data", dataSchema);
