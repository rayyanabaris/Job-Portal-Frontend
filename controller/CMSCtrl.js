const CMS = require("../models/CMSModel");
const asyncHandler = require("express-async-handler");

const getCMSPageList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalCMSdata = await CMS.countDocuments();
      const totalPages = Math.ceil(totalCMSdata / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allCMSPage = await CMS.find().skip((page - 1) * limit).limit(limit)
      .sort("page_slug : 1");
    
    return res.status(200).json({
      success: true,
      msg: 'CMS',
      data: allCMSPage,
      page,
      nextPage,
      totalPages,
      totalCMSdata
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getCMSPageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaCMSPage = await CMS.findById(id)
    res.json(getaCMSPage);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterCMS = asyncHandler(async (req, res) => {
  try {
    const getaCMSPage = await CMS.find(req.query);
    res.json(getaCMSPage);
  } catch (error) {
    throw new Error(error);
  }
});
const createCMSPage = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const CMSPage = await CMS.create(req.body);
    res.json(CMSPage);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCMSPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedCMSPage = await CMS.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCMSPage);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCMSPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedCMSPage = await CMS.findByIdAndDelete(id);
    res.json(deletedCMSPage);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchCMSPage = asyncHandler(async (req, res) => {
  try {
    const getSearchedCMSPage = await CMS.find({

      "$or":[
        {page_slug:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchedCMSPage);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCMSPageList,
  getFilterCMS,
  getCMSPageById,
  getSearchCMSPage,
  createCMSPage,
  updateCMSPage,
  deleteCMSPage,
};
