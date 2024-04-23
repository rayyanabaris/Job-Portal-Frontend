const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema(
  {
    location_code: {
      type: String,
      require: true,
    },
    location_name: {
      type: String,
      require: true,
    },
    state_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "states",
    },
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "countries",
    },
    is_active: {
      type: Number,
      default: '1',
    },
      meta_description: {
      type: String,
    },
    lang: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

LocationSchema.index({ title: "text" });

module.exports = mongoose.model("location", LocationSchema);
