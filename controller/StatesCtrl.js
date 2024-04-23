const State = require("../models/StatesModel");
const asyncHandler = require("express-async-handler");

const getStatesList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalStates = await State.countDocuments();
      const totalPages = Math.ceil(totalStates / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allStates = await State.find().skip((page - 1) * limit).limit(limit)
      .populate("country_id")
      .sort("state : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'States List',
      data: allStates,
      page,
      nextPage,
      totalPages,
      totalStates
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getStatesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaStates = await State.findById(id)
    .exec();
    res.json(getaStates);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterStates = asyncHandler(async (req, res) => {
  try {
    const getaStates = await State.find(req.query);
    res.json(getaStates);
  } catch (error) {
    throw new Error(error);
  }
});
const createStates = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const States = await State.create(req.body);
    res.json(States);
  } catch (error) {
    throw new Error(error);
  }
});
const updateStates = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedStates = await State.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedStates);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteStates = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedStates = await State.findByIdAndDelete(id);
    res.json(deletedStates);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchStates = asyncHandler(async (req, res) => {
  try {
    const getSearchedStates = await State.find({

      "$or":[
        {state:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchedStates);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getStatesList,
  getStatesById,
  getFilterStates,
  getSearchStates,
  createStates,
  updateStates,
  deleteStates,
};
