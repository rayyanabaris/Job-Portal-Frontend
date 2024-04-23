const candidate = require("../models/CandidateModel");
const asyncHandler = require("express-async-handler");

const getcandidateList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalCandidate = await candidate.countDocuments();
    const totalPages = Math.ceil(totalCandidate / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const getcandidateList = await candidate
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("job_category")
      .populate("location")
      .sort("name : 1")
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Candiadate List",
      data: getcandidateList,
      page,
      nextPage,
      totalPages,
      totalCandidate,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getcandidateById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getacandidate = await candidate
      .findById(id);
    res.json(getacandidate);
  } catch (error) {
    throw new Error(error);
  }
});
const getfiltercandidateList = asyncHandler(async (req, res) => {
  try {
    const getacandidate = await candidate.find(req.query);
    // .populate("job_category")
    // .populate("location");
    res.json(getacandidate);
  } catch (error) {
    throw new Error(error);
  }
});
const addcandidate = asyncHandler(async (req, res) => {
  try {
    const candidates = await candidate.create(req.body);
    res.json(candidates);
  } catch (error) {
    throw new Error(error);
  }
});
const updatecandidate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedcandidate = await candidate.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedcandidate);
  } catch (error) {
    throw new Error(error);
  }
});
const deletecandidate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedcandidate = await candidate.findByIdAndDelete(id);
    res.json(deletedcandidate);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchcandidate = asyncHandler(async (req, res) => {
  try {
    const getSearchcandidate = await candidate.find({
      $or: [
        { name: { $regex: req.params.key } },
        { email: { $regex: req.params.key } },
        { email2: { $regex: req.params.key } },
        { mobile: { $regex: req.params.key } },
        { mobile2: { $regex: req.params.key } },
      ],
    });
    res.json(getSearchcandidate);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getcandidateList,
  getcandidateById,
  getSearchcandidate,
  getfiltercandidateList,
  addcandidate,
  updatecandidate,
  deletecandidate,
};
