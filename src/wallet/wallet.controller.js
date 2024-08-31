const { mockAddMoneyToWallet } = require("./wallet.service");

function addMoneyToWalletController(req, res, next) {
  return mockAddMoneyToWallet(req, res, next);
}

module.exports = {
  addMoneyToWalletController,
};
