const mongoose = require("mongoose");

const CountriesSchema = mongoose.Schema(
  {
    country: {
      type: String,
      require: true,
    },
    nationality: {
      type: String,
      require: true,
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
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

CountriesSchema.index({ title: "text" });

module.exports = mongoose.model("countries", CountriesSchema);
