const mongoose = require("mongoose");

const CMSContentPageSchema = mongoose.Schema(
  {
    page_title: {
      type: String,
      require: true,
    },
    page_content: {
      type: String,
      require: true,
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

CMSContentPageSchema.index({ title: "text" });

module.exports = mongoose.model("cms_content", CMSContentPageSchema);
