const Industry = require("../models/IndustriesModel");
const asyncHandler = require("express-async-handler");

const getIndustriesList = asyncHandler(async (req, res) => {
  try {
    const allIndustries = await Industry.find()
    .populate("language_id")
    .sort("industry : 1")
    .exec();
    res.json(allIndustries);
  } catch (error) {
    throw new Error(error);
  }
});

const getIndustriesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaIndustries = await Industry.findById(id);
    res.json(getaIndustries);
  } catch (error) {
    throw new Error(error);
  }
});

const createIndustries = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Industries = await Industry.create(req.body);
    res.json(Industries);
  } catch (error) {
    throw new Error(error);
  }
});
const updateIndustries = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedIndustries = await Industry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedIndustries);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteIndustries = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedIndustries = await Industry.findByIdAndDelete(id);
    res.json(deletedIndustries);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchIndustries = asyncHandler(async (req, res) => {
  try {
    const getSearchedIndustries = await Industry.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedIndustries);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getIndustriesList,
  getIndustriesById,
  getSearchIndustries,
  createIndustries,
  updateIndustries,
  deleteIndustries,
};
