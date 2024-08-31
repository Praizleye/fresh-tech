const baseSchema = {
  provider: {
    type: String,
    required: true,
  },
  package: {
    type: {
      amount: {
        type: Number,
        required: true,
      },
      validity: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
};

module.exports = baseSchema;
