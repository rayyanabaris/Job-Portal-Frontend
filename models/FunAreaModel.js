const mongoose = require("mongoose");

const FunAreasSchema = mongoose.Schema(
  {
    functional_area: {
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

FunAreasSchema.index({ title: "text" });

module.exports = mongoose.model("functional_areas", FunAreasSchema);
