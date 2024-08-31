const airtimeSchema = require("./schemas/airtime.schema");
const dataSchema = require("./schemas/data.schema");
const cableSchema = require("./schemas/cable.schema");
const electricitySchema = require("./schemas/electricity.schema");
const {
  customErrorHandler,
} = require("../middleware/error-handler.middleware");

const createAdditionalProvidersService = async (req, res, next) => {
  try {
    if (
      !req.body.model.includes[
        (airtimeSchema, dataSchema, cableSchema, electricitySchema)
      ]
    ) {
      customErrorHandler(res, "Invalid model", 400);
    }
    const newProvider = await model.create(req.body);
    return res.status(201).json({ newProvider });
  } catch (error) {
    customErrorHandler(res, error.message, 500);
  }
};
