const CMSContent = require("../models/CMSContentModel");
const asyncHandler = require("express-async-handler");

const getCMSContentPageList = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const totalCMSContent = await CMSContent.countDocuments();
    const totalPages = Math.ceil(totalCMSContent / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const allCMSContent = await CMSContent.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("language_id")
      .sort("page_title : 1");

    return res.status(200).json({
      success: true,
      msg: "CMS Content",
      data: allCMSContent,
      page,
      nextPage,
      totalPages,
      totalCMSContent,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getCMSContentPageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaCMSContentPage = await CMSContent.findById(id)
    .populate("language_id");
    res.json(getaCMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterCMSContent = asyncHandler(async (req, res) => {
  try {
    const getaCMSContentPage = await CMSContent.find(req.query);
    res.json(getaCMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});
const createCMSContentPage = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const CMSContentPage = await CMSContent.create(req.body);
    res.json(CMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCMSContentPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedCMSContentPage = await CMSContent.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedCMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCMSContentPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedCMSContentPage = await CMSContent.findByIdAndDelete(id);
    res.json(deletedCMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchCMSContentPage = asyncHandler(async (req, res) => {
  try {
    const getSearchedCMSContentPage = await CMSContent.find({
      $or: [{ page_title: { $regex: req.params.key } }],
    });
    res.json(getSearchedCMSContentPage);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCMSContentPageList,
  getCMSContentPageById,
  getSearchCMSContentPage,
  createCMSContentPage,
  getFilterCMSContent,
  updateCMSContentPage,
  deleteCMSContentPage,
};
