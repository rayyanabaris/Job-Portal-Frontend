const Positions = require("../models/PositionModel");
const asyncHandler = require("express-async-handler");

const getPositionList = asyncHandler(async (req, res) => {
  try {
    const allPosition = await Positions.find()
    .populate("language_id")
    .sort("position : 1");
    res.json(allPosition);
  } catch (error) {
    throw new Error(error);
  }
});

const getPositionById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaPosition = await Positions.findById(id)
    .populate("language_id");
    res.json(getaPosition);
  } catch (error) {
    throw new Error(error);
  }
});

const createPosition = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Position = await Positions.create(req.body);
    res.json(Position);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePosition = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedPosition = await Positions.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPosition);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePosition = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedPosition = await Positions.findByIdAndDelete(id);
    res.json(deletedPosition);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchPosition = asyncHandler(async (req, res) => {
  try {
    const getSearchedPosition = await Positions.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedPosition);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getPositionList,
  getPositionById,
  getSearchPosition,
  createPosition,
  updatePosition,
  deletePosition,
};
