const mongoose = require("mongoose");

const StatesSchema = mongoose.Schema(
  {
    state: {
      type: String,
      require: true,
    },
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "countries"
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

StatesSchema.index({ title: "text" });

module.exports = mongoose.model("states", StatesSchema);
