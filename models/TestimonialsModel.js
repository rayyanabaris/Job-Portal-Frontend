const mongoose = require("mongoose");

const TestimonialSchema = mongoose.Schema(
  {
    testimonial_by: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
    company: {
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

TestimonialSchema.index({ title: "text" });

module.exports = mongoose.model("testimonials", TestimonialSchema);
