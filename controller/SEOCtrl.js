const SEOPages = require("../models/SEOModel");
const asyncHandler = require("express-async-handler");

const getSEOPageList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalSEOPages = await SEOPages.countDocuments();
      const totalPages = Math.ceil(totalSEOPages / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allSEOPage = await SEOPages.find(req.query).skip((page - 1) * limit).limit(limit)
      .sort("seo_title : 1");
    
    return res.status(200).json({
      success: true,
      msg: 'SEO Pages',
      data: allSEOPage,
      page,
      nextPage,
      totalPages,
      totalSEOPages
    })
  } catch (error) {
    throw new Error(error);
  }
});

const getSEOPageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaSEOPage = await SEOPages.findById(id)
    res.json(getaSEOPage);
  } catch (error) {
    throw new Error(error);
  }
});

const createSEOPage = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const SEOPage = await SEOPages.create(req.body);
    res.json(SEOPage);
  } catch (error) {
    throw new Error(error);
  }
});
const updateSEOPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedSEOPage = await SEOPages.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSEOPage);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteSEOPage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedSEOPage = await SEOPages.findByIdAndDelete(id);
    res.json(deletedSEOPage);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchSEOPage = asyncHandler(async (req, res) => {
  try {
    const getSearchedSEOPage = await SEOPages.find({

      "$or":[
        {seo_title:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchedSEOPage);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getSEOPageList,
  getSEOPageById,
  getSearchSEOPage,
  createSEOPage,
  updateSEOPage,
  deleteSEOPage,
};
