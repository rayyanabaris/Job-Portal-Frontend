const mongoose = require("mongoose");

const SalaryPeriodSchema = mongoose.Schema(
  {
    salary_period: {
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

SalaryPeriodSchema.index({ title: "text" });

module.exports = mongoose.model("salary_periods", SalaryPeriodSchema);
