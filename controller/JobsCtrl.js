const Jobs = require("../models/JobsModel");
const asyncHandler = require("express-async-handler");

const getJobList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalJobs = await Jobs.countDocuments();
    const totalPages = Math.ceil(totalJobs / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const getJobList = await Jobs.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("skills_id")
      .populate("company_id")
      .populate("position")
      .populate("category_name")
      .populate("country_id")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience")
      .sort("job_title = 1")
      .sort("title = 1")
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Jobs List",
      data: getJobList,
      page,
      nextPage,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getFeaturedJobList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalJobs = await Jobs.countDocuments();
    const totalPages = Math.ceil(totalJobs / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const getJobList = await Jobs.find({"is_featured":'1'})
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("skills_id")
      .populate("company_id")
      .populate("position")
      .populate("category_name")
      .populate("country_id")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience")
      .sort("job_title = 1")
      .sort("title = 1")
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Jobs List",
      data: getJobList,
      page,
      nextPage,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getActiveJobList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalJobs = await Jobs.countDocuments();
    const totalPages = Math.ceil(totalJobs / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const getJobList = await Jobs.find({"is_active":'1'})
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("skills_id")
      .populate("company_id")
      .populate("position")
      .populate("category_name")
      .populate("country_id")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience")
      .sort("job_title = 1")
      .sort("title = 1")
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Jobs List",
      data: getJobList,
      page,
      nextPage,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getNewJobList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalJobs = await Jobs.countDocuments();
    const totalPages = Math.ceil(totalJobs / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const getJobList = await Jobs.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("skills_id")
      .populate("company_id")
      .populate("position")
      .populate("category_name")
      .populate("country_id")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience")
      .sort({"_id": '-1'})
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Jobs List",
      data: getJobList,
      page,
      nextPage,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaJob = await Jobs.findById(id)
      .populate("skills_id")
      .populate("company_id")
      .populate("position")
      .populate("category_name")
      .populate("country_id")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience");
    res.json(getaJob);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterJob = asyncHandler(async (req, res) => {
  try {
    const getaJob = await Jobs.find(req.query)
      .populate("skills_id")
      .populate("country_id")
      .populate("category_name")
      .populate("company_id")
      .populate("position")
      .populate("states_id")
      .populate("city_id")
      .populate("currency_id")
      .populate("salery_periods_id")
      .populate("carrier_level_id")
      .populate("functional_area_id")
      .populate("job_type_id")
      .populate("job_shift_id")
      .populate("gender_id")
      .populate("degree_level")
      .populate("job_experience")
      .exec();
    res.json(getaJob);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchJob = asyncHandler(async (req, res) => {
  try {
    const getSearchJob = await Jobs.find({
      $or: [
        { title: { $regex: req.params.key } },
        { job_title: { $regex: req.params.key } },
      ],
    });
    res.json(getSearchJob);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getJobList,
  getJobById,
  getFeaturedJobList,
  getActiveJobList,
  getNewJobList,
  getFilterJob,
  getSearchJob,
};
