const mongoose = require("mongoose");

const JobsSchema = mongoose.Schema(
  {
    job_title: {
      type: String,
      require: true,
      unique: true,
    },
    job_description: {
      type: String,
      require: true,
    },
    job_benefits: {
      type: String,
      require: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "companies"
    },
    skills_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "job_skills"
    },
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "countries"
    },
    states_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "states"
    },
    city_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "cities"
    },
    salary_from: {
      type: Number,
      require: true,
    }, 
    salary_to: {
      type: Number,
      require: true,
    }, 
    currency_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "salary_currencies"
    },
    salery_periods_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "salary_periods"
    },
    hide_salary: {
      type: Number,
      default: '0',
      require: true,
    }, 
    carrier_level_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "career_levels"
    },
    functional_area_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "functional_areas"
    },
    job_type_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "job_types"
    },
    job_shift_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "job_shifts"
    },
    position: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "positions"
    }, 
    gender_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "genders"
    },
    job_expiry_date: {
      type: String,
      require: true,
    }, 
    degree_level: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "degree_levels"
    },
    job_experience: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "job_experiences"
    },
    category_name: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "job_categories"
    },
    is_active:{
      type: String,
      require: true,
      default: '0',
  
    },
    is_featured:{
      type: String,
      require: true,
      default: '0',
  
    },
    slug:{
      type: String,
      require: true,
    },
    reference:{
      type: String,
      require: true,
    },
    postal_code:{
      type: String,
      require: true,
    },
    job_advertiser:{
      type: String,
      require: true,
    },  
  },
  {
    timestamps: true,
  }
);

JobsSchema.index({ title: "text" });

module.exports = mongoose.model("jobs", JobsSchema);