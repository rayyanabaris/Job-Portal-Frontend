const mongoose = require("mongoose");

const PositionSchema = mongoose.Schema(
  {
    position: {
      type: Number,
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

PositionSchema.index({ title: "text" });

module.exports = mongoose.model("positions", PositionSchema);
