const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    job_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job_categories"
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "location"
    },
    email: {
      type: String,
    },
    email2: {
      type: String,
    },
    mobile2: {
      type: String,
    },
    mobile: {
      type: String,
      unique: true,
    },
    resume: {
      type: String,
    },
    is_selected: {
      type: Number,
      default: '0',
    },
      is_active: {
      type: Number,
      default: '1',
    },
   created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    },
  },
);

candidateSchema.index({ title: "text" });

module.exports = mongoose.model("candidates", candidateSchema);

