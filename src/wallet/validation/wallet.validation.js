const joi = require("joi");

const walletValidation = {
  addMoneyToWallet: {
    body: joi.object().keys({
      balance: joi.number().required(),
    }),
  },
};

module.exports = walletValidation;
