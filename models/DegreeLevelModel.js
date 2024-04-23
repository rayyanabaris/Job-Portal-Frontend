const mongoose = require("mongoose");

const DegreeLevelSchema = mongoose.Schema(
  {
    degree_level: {
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

DegreeLevelSchema.index({ title: "text" });

module.exports = mongoose.model("degree_levels", DegreeLevelSchema);
