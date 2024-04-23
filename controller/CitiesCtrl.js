const City = require("../models/CitiesModel");
const asyncHandler = require("express-async-handler");

const getCitiesList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalCities = await City.countDocuments();
      const totalPages = Math.ceil(totalCities / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allCities = await City.find().skip((page - 1) * limit).limit(limit)
      .populate("state_id")
      .populate("country_id")
      .sort("cities : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Cities List',
      data: allCities,
      page,
      nextPage,
      totalPages,
      totalCities
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getCitiesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaCities = await City.findById(id)
    .exec();
    res.json(getaCities);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterCities = asyncHandler(async (req, res) => {
  try {
    const getFilterCities = await City.find(req.query);
    res.json(getFilterCities);
  } catch (error) {
    throw new Error(error);
  }
});
const createCities = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Cities = await City.create(req.body);
    res.json(Cities);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCities = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedCities = await City.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCities);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCities = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedCities = await City.findByIdAndDelete(id);
    res.json(deletedCities);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchCities = asyncHandler(async (req, res) => {
  try {
    const getSearchedCities = await City.find({

      "$or":[
        {city:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchedCities);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCitiesList,
  getCitiesById,
  getFilterCities,
  getSearchCities,
  createCities,
  updateCities,
  deleteCities,
};
