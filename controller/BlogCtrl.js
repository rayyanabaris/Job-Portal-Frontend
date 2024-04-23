const Blogs = require("../models/BlogModel");
const asyncHandler = require("express-async-handler");

const getBlogList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalBlog = await Blogs.countDocuments();
      const totalPages = Math.ceil(totalBlog / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allBlog = await Blogs.find().skip((page - 1) * limit).limit(limit)
      .populate("blog_category")
      .populate("language_id")
      .sort("createdAt : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Blogs List',
      data: allBlog,
      page,
      nextPage,
      totalPages,
      totalBlog
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaBlog = await Blogs.findById(id)
    .populate("blog_category")
    .populate("language_id");
    res.json(getaBlog);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterBlog = asyncHandler(async (req, res) => {
  try {
    const Blog = await Blogs.find(req.query);
    res.json(Blog);
  } catch (error) {
    throw new Error(error);
  }
});
const createBlog = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Blog = await Blogs.create(req.body);
    res.json(Blog);
  } catch (error) {
    throw new Error(error);
  }
});
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedBlog = await Blogs.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchBlog = asyncHandler(async (req, res) => {
  try {
    const getSearchBlog = await Blogs.find({

      "$or":[
        {meta_title:{$regex:req.params.key}},
        {meta_keywords:{$regex:req.params.key}},
        {content:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getBlogList,
  getBlogById,
  getFilterBlog,
  getSearchBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
