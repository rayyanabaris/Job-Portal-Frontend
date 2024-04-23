const mongoose = require("mongoose");

const BlogCategorySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    slug: {
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
  },
  {
    timestamps: true,
  }
);

BlogCategorySchema.index({ title: "text" });

module.exports = mongoose.model("blog_categories", BlogCategorySchema);
