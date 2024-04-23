const mongoose = require("mongoose");

const CitiesSchema = mongoose.Schema(
  {
  
    city: {
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

CitiesSchema.index({ title: "text" });

module.exports = mongoose.model("cities", CitiesSchema);
