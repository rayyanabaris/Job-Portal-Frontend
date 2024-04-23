const mongoose = require("mongoose");

const SliderSchema = mongoose.Schema(
  {
    slider_image: {
      type: String,
      required: true,
    },
    slider_heading: {
      type: String,
      required: true,
    },
    slider_heading: {
      type: String,
      required: true,
    },
    slider_link: {
      type: String,
      required: true,
    },
    slider_link_text: {
      type: String,
      required: true,
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
      type: Number,
      default: '1',
    },
    featured: {
      type: Number,
      default: '1',
    },
  },
  {
    timestamps: true,
  }
);

SliderSchema.index({ title: "text" });

module.exports = mongoose.model("sliders", SliderSchema);
