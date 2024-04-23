const mongoose = require("mongoose");

const CurrenciesSchema = mongoose.Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
      type: Number,
      default: '0',
    },
    sort_order: {
      type: Number,
      default: '0',
    },
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "languages",
    },
  },
  {
    timestamps: true,
  }
);

CurrenciesSchema.index({ title: "text" });

module.exports = mongoose.model("salary_currencies", CurrenciesSchema);
