const mongoose = require("mongoose");

const MajorSubjectSchema = mongoose.Schema(
  {
    major_subject: {
      type: String,
      required: true,
    },
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "languages",
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
      type: Number,
      default: '0',
    },
  },
  {
    timestamps: true,
  }
);

MajorSubjectSchema.index({ title: "text" });

module.exports = mongoose.model("major_subjects", MajorSubjectSchema);
