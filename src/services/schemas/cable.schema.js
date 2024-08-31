const mongoose = require("mongoose");
const baseSchema = require("./base.schema");

const cableSchema = new mongoose.Schema(...baseSchema, { timestamps: true });
module.exports = mongoose.model("Cable", cableSchema);
