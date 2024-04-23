const Country = require("../models/CountriesModel");
const asyncHandler = require("express-async-handler");

const getCountriesList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalCountries = await Country.countDocuments();
      const totalPages = Math.ceil(totalCountries / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allCountries = await Country.find().skip((page - 1) * limit).limit(limit)
      .sort("country : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Countries List',
      data: allCountries,
      page,
      nextPage,
      totalPages,
      totalCountries
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getCountriesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaCountries = await Country.findById(id);
    res.json(getaCountries);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterCountries = asyncHandler(async (req, res) => {
  try {
    const getFilterCountries = await Country.find(req.query);
    res.json(getFilterCountries);
  } catch (error) {
    throw new Error(error);
  }
});
const createCountries = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Countries = await Country.create(req.body);
    res.json(Countries);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCountries = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedCountries = await Country.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCountries);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCountries = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedCountries = await Country.findByIdAndDelete(id);
    res.json(deletedCountries);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchCountries = asyncHandler(async (req, res) => {
  try {
    const getSearchCountries = await Country.find({

      "$or":[
        {country:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchCountries);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCountriesList,
  getCountriesById,
  getFilterCountries,
  getSearchCountries,
  createCountries,
  updateCountries,
  deleteCountries,
};
