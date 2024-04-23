const BlogCategorys = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

const getBlogCategoryList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalBlogCategories = await BlogCategorys.countDocuments();
      const totalPages = Math.ceil(totalBlogCategories / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allBlogCategory = await BlogCategorys.find().skip((page - 1) * limit).limit(limit)
      .sort("heading : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Blogs Category List',
      data: allBlogCategory,
      page,
      nextPage,
      totalPages,
      totalBlogCategories
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getBlogCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaBlogCategory = await BlogCategorys.findById(id);
    res.json(getaBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterBlogCat = asyncHandler(async (req, res) => {
  try {
    const getaBlogCategory = await BlogCategorys.find(req.query);
    res.json(getaBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const BlogCategory = await BlogCategorys.create(req.body);
    res.json(BlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const updateBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedBlogCategory = await BlogCategorys.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedBlogCategory = await BlogCategorys.findByIdAndDelete(id);
    res.json(deletedBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchBlogCategory = asyncHandler(async (req, res) => {
  try {
    const getSearchBlogCategory = await BlogCategorys.find({

      "$or":[
        {heading:{$regex:req.params.key}},
        {slug:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getBlogCategoryList,
  getBlogCategoryById,
  getFilterBlogCat,
  getSearchBlogCategory,
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};
