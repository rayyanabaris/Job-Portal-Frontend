const mongoose = require("mongoose");

const SEOPageSchema = mongoose.Schema(
  {
    page_title: {
      type: String,
      require: true,
    },
    seo_title: {
      type: String,
      require: true,
    },
    seo_description: {
      type: String,
    },
    seo_keywords: {
      type: String,
    },
    seo_other: {
      type: String,
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

SEOPageSchema.index({ title: "text" });

module.exports = mongoose.model("seo", SEOPageSchema);
