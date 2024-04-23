const mongoose = require("mongoose");

const FAQSchema = mongoose.Schema(
  {
    faq_question: {
      type: String,
      required: true,
    },
    faq_answer: {
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

FAQSchema.index({ title: "text" });

module.exports = mongoose.model("faqs", FAQSchema);
