const router = require("express").Router();
const walletController = require("../wallet/wallet.controller");
const protectRoutes = require("../middleware/protect-routes.middleware");
const walletValidation = require("../wallet/validation/wallet.validation");
const validate = require("../middleware/custom-validation.middleware");

router.post(
  "/wallet/add-money",

  (req, res, next) =>
    validate({
      req,
      res,
      next,
      schema: walletValidation.addMoneyToWallet.body.validate(req.body),
    }),
  (req, res, next) =>
    walletController.addMoneyToWalletController(req, res, next)
);

module.exports = router;
