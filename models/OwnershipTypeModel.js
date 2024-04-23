const mongoose = require("mongoose");

const OwnershipTypeSchema = mongoose.Schema(
  {
    ownership_type: {
      type: String,
      unique: true,
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

OwnershipTypeSchema.index({ title: "text" });

module.exports = mongoose.model("ownership_type", OwnershipTypeSchema);
