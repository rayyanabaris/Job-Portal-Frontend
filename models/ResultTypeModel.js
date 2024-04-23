const mongoose = require("mongoose");

const ResultTypeSchema = mongoose.Schema(
  {
    result_type: {
      type: String,
      required: true,
    },
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "languages",
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
      type: Number,
      default: '0',
    },
  },
  {
    timestamps: true,
  }
);

ResultTypeSchema.index({ title: "text" });

module.exports = mongoose.model("result_types", ResultTypeSchema);
