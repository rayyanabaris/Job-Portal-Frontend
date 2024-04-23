const LanguageLevels = require("../models/LanguageLevelModel");
const asyncHandler = require("express-async-handler");

const getLanguageLevelList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalLangLevel = await LanguageLevels.countDocuments();
      const totalPages = Math.ceil(totalLangLevel / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allLanguageLevel = await LanguageLevels.find(req.query).skip((page - 1) * limit).limit(limit)
      .populate("language_id")
      .sort("sort : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Language Level List',
      data: allLanguageLevel,
      page,
      nextPage,
      totalPages,
      totalLangLevel
    })
  } catch (error) {
    throw new Error(error);
  }
});

const getLanguageLevelById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaLanguageLevel = await LanguageLevels.findById(id);
    res.json(getaLanguageLevel);
  } catch (error) {
    throw new Error(error);
  }
});

const createLanguageLevel = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const LanguageLevel = await LanguageLevels.create(req.body);
    res.json(LanguageLevel);
  } catch (error) {
    throw new Error(error);
  }
});
const updateLanguageLevel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedLanguageLevel = await LanguageLevels.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedLanguageLevel);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteLanguageLevel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedLanguageLevel = await LanguageLevels.findByIdAndDelete(id);
    res.json(deletedLanguageLevel);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchLanguageLevel = asyncHandler(async (req, res) => {
  try {
    const getSearchLanguageLevel = await LanguageLevels.find({

      "$or":[
        {language_level:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchLanguageLevel);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getLanguageLevelList,
  getLanguageLevelById,
  getSearchLanguageLevel,
  createLanguageLevel,
  updateLanguageLevel,
  deleteLanguageLevel,
};
