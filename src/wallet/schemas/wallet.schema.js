const mongoose = require("mongoose");
const userSchema = require("../../users/schema/user.schema");

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userSchema.modelName,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Wallet", walletSchema);
