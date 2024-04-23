const OwnershipTypes = require("../models/OwnershipTypeModel");
const asyncHandler = require("express-async-handler");

const getOwnershipTypeList = asyncHandler(async (req, res) => {
  try {
    const allOwnershipType = await OwnershipTypes.find()
    .populate("language_id")
    .sort("ownership_types : 1")
    .exec();
    res.json(allOwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});

const getOwnershipTypeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaOwnershipType = await OwnershipTypes.findById(id)
    .populate("language_id")
    .sort("ownership_types : 1")
    .exec();
    res.json(getaOwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});

const createOwnershipType = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const OwnershipType = await OwnershipTypes.create(req.body);
    res.json(OwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});
const updateOwnershipType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedOwnershipType = await OwnershipTypes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedOwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteOwnershipType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedOwnershipType = await OwnershipTypes.findByIdAndDelete(id);
    res.json(deletedOwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchOwnershipType = asyncHandler(async (req, res) => {
  try {
    const getSearchedOwnershipType = await OwnershipTypes.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedOwnershipType);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getOwnershipTypeList,
  getOwnershipTypeById,
  getSearchOwnershipType,
  createOwnershipType,
  updateOwnershipType,
  deleteOwnershipType,
};
