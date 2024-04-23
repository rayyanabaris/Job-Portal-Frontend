const mongoose = require("mongoose");

const LanguageSchema = mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },
    native: {
      type: String,
    },
    iso_code: {
      type: String,

    },
    is_active: {
      type: Number,
      default: '0',
    },
    is_rtl: {
      type: Number,
      default: '0',
    },
    is_default: {
      type: Number,
      default: '0',
    },
  },
  {
    timestamps: true,
  }
);

LanguageSchema.index({ title: "text" });

module.exports = mongoose.model("languages", LanguageSchema);
