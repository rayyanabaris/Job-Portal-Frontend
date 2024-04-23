const mongoose = require("mongoose");

const DegreeTypeSchema = mongoose.Schema(
  {
    degree_type: {
      type: String,
      required: true,
    },
    language_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "languages",
    },
    degreelevel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "degree_levels",
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

DegreeTypeSchema.index({ title: "text" });

module.exports = mongoose.model("degree_types", DegreeTypeSchema);
