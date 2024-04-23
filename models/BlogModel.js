const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    blog_category: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "blog_categories",
    },
    content: {
      type: String,
      required: true,
    },
    meta_title: {
      type: String,
      required: true,
    },
    meta_keywords: {
      type: String,
    },
    meta_descriptions: {
      type: String,
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
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "languages",
    },
    images: [],
  },
  {
    timestamps: true,
  }
);

BlogSchema.index({ title: "text" });

module.exports = mongoose.model("blogs", BlogSchema);
