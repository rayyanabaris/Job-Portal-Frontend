const mongoose = require("mongoose");

const CMSPageSchema = mongoose.Schema(
  {
    page_slug: {
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
    show_in_top_menu: {
      type: Number,
      default: '1',
    },
    show_in_footer_menu: {
      type: Number,
      default: '1',
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

CMSPageSchema.index({ title: "text" });

module.exports = mongoose.model("cms", CMSPageSchema);
