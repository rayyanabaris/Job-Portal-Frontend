const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
  {
    Video_title: {
      type: String,
      required: true,
    },
    Video_text: {
      type: String,
      required: true,
    },
    Video_link: {
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

VideoSchema.index({ title: "text" });

module.exports = mongoose.model("videos", VideoSchema);
