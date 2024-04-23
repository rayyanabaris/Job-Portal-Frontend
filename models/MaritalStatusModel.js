const mongoose = require("mongoose");

const MaritalStatusSchema = mongoose.Schema(
  {
    marital_status: {
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
      required: true,
      ref: "languages"

    },
  },
  {
    timestamps: true,
  }
);

MaritalStatusSchema.index({ title: "text" });

module.exports = mongoose.model("marital_status", MaritalStatusSchema);
