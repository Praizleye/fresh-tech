const {
  customErrorHandler,
  successHandler,
} = require("../middleware/error-handler.middleware");
const walletSchema = require("./schemas/wallet.schema");

const mongoose = require("mongoose");

const mockAddMoneyToWalletTransactionalExample = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Find wallet by id within the stransaction
    const wallet = await walletSchema
      .findById(req.user._id)
      .session(session)
      .lean();
    console.log("🚀 ~ mockAddMoneyToWal ~ wallet:", wallet);

    if (!wallet) {
      await session.abortTransaction();
      session.endSession();
      customErrorHandler(res, "Wallet not found", 404);
    }

    // Add balance to wallet using $inc for atomic operation
    const updatedWallet = await walletSchema.findByIdAndUpdate(
      req.params.userId,
      { $inc: { balance: req.body.balance } },
      { new: true, session: session }
    );

    await session.commitTransaction();
    session.endSession();

    return successHandler(
      res,
      { value: updatedWallet, message: "Transaction successful" },
      200
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    // throw new Error(error);
    customErrorHandler(500, error.message, next);
  }
};

const mockAddMoneyToWallet = async (req, res, next) => {
  try {
    // Find the wallet and update it in one atomic operation
    const updatedWallet = await walletSchema.findOneAndUpdate(
      { userId: req.user._id },
      { $inc: { balance: req.body.balance } },
      { new: true, runValidators: true }
    );
    console.log("🚀 ~ mockAddMoneyToWal ~ updatedWallet:", updatedWallet);

    if (!updatedWallet) {
      customErrorHandler(res, "Wallet not found", 404);
    }

    successHandler(
      res,
      { value: updatedWallet, message: "Operation successful" },
      200
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error in mockAddMoneyToWallet:", error);
    customErrorHandler(500, error.message, next);
  }
};

const getCurrentBalance = async (req, res, next) => {
  try {
    const wallet = await walletSchema.findOne({ userId: req.user._id });
    if (!wallet) {
      customErrorHandler(res, "Wallet not found", 404);
    }
    successHandler(res, { value: wallet.balance }, 200);
  } catch (error) {
    customErrorHandler(500, error.message, next);
  }
};

module.exports = { mockAddMoneyToWallet, getCurrentBalance };
