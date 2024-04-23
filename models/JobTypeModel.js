const mongoose = require("mongoose");

const JobTypeSchema = mongoose.Schema(
  {
    job_type: {
      type: String,
      require: true,
    },
    is_default: {
      type: Number,
      default: '0',
    },
    is_active: {
      type: Number,
      default: '0',
    },
    sort_order: {
      type: Number,
      default: '0',
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

JobTypeSchema.index({ title: "text" });

module.exports = mongoose.model("job_types", JobTypeSchema);
