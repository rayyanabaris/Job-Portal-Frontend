const FAQs = require("../models/FAQSModel");
const asyncHandler = require("express-async-handler");

const getFAQList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalFAQ = await FAQs.countDocuments();
      const totalPages = Math.ceil(totalFAQ / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allFAQ = await FAQs.find().skip((page - 1) * limit).limit(limit)
      .populate("language_id")
      .sort("createdAt : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'FAQs List',
      data: allFAQ,
      page,
      nextPage,
      totalPages,
      totalFAQ
    })
  } catch (error) {
    throw new Error(error);
  }
});
const getFAQById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaFAQ = await FAQs.findById(id)
    .populate("language_id");
    res.json(getaFAQ);
  } catch (error) {
    throw new Error(error);
  }
});
const getFilterFAQs = asyncHandler(async (req, res) => {
  try {
    const FAQ = await FAQs.find(req.query);
    res.json(FAQ);
  } catch (error) {
    throw new Error(error);
  }
});
const createFAQ = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const FAQ = await FAQs.create(req.body);
    res.json(FAQ);
  } catch (error) {
    throw new Error(error);
  }
});
const updateFAQ = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedFAQ = await FAQs.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedFAQ);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteFAQ = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedFAQ = await FAQs.findByIdAndDelete(id);
    res.json(deletedFAQ);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchFAQ = asyncHandler(async (req, res) => {
  try {
    const getSearchFAQ = await FAQs.find({

      "$or":[
        {faq_question:{$regex:req.params.key}},
        {faq_answer:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchFAQ);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getFAQList,
  getFAQById,
  getFilterFAQs,
  getSearchFAQ,
  createFAQ,
  updateFAQ,
  deleteFAQ,
};
