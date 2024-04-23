const Locations = require("../models/LocationModel");
const asyncHandler = require("express-async-handler");

const getLocationList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalLocations = await Locations.countDocuments();
      const totalPages = Math.ceil(totalLocations / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allLocation = await Locations.find().skip((page - 1) * limit).limit(limit)
      .populate("state_id")
      .populate("country_id")
      .sort("location_name : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Locations List',
      data: allLocation,
      page,
      nextPage,
      totalPages,
      totalLocations
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getLocationById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaLocation = await Locations.findById(id)
    .populate("state_id")
    .populate("country_id")
    .exec();
    res.json(getaLocation);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterLocation = asyncHandler(async (req, res) => {
  try {
    const getaLocation = await Locations
      .find(req.query)
      .populate("state_id")
      .populate("country_id")
      .exec();
    res.json(getaLocation);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllLocation = asyncHandler(async (req, res) => {
  try {
    const getaLocation = await Locations.find();
    res.json(getaLocation);
  } catch (error) {
    throw new Error(error);
  }
});
const createLocation = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Location = await Locations.create(req.body);
    res.json(Location);
  } catch (error) {
    throw new Error(error);
  }
});
const updateLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedLocation = await Locations.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedLocation);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedLocation = await Locations.findByIdAndDelete(id);
    res.json(deletedLocation);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchLocation = asyncHandler(async (req, res) => {
  try {
    const getSearchLocation = await Locations.find({

      "$or":[
        {location:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchLocation);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getLocationList,
  getLocationById,
  getAllLocation,
  getFilterLocation,
  getSearchLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};
