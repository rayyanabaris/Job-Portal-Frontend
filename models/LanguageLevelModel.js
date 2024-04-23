const mongoose = require("mongoose");

const LanguageLevelSchema = mongoose.Schema(
  {
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "language",
    },
    language_level: {
      type: String,
      require: true,
    },
    is_active: {
      type: Number,
      default: '1',
    },
    is_default: {
      type: Number,
      default: '1',
    },
  },
  {
    timestamps: true,
  }
);

LanguageLevelSchema.index({ title: "text" });

module.exports = mongoose.model("language_levels", LanguageLevelSchema);
