const mongoose = require("mongoose");

const Skillschema = mongoose.Schema(
  {
    job_skills: {
      type: String,
      required: true,
      unique: true,
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

Skillschema.index({ title: "text" });

module.exports = mongoose.model("job_skills", Skillschema);
