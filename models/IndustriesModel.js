const mongoose = require("mongoose");

const IndustriesSchema = mongoose.Schema(
  {
    industry: {
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

IndustriesSchema.index({ title: "text" });

module.exports = mongoose.model("industries", IndustriesSchema);
