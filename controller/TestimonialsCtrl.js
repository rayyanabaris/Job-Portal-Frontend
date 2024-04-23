const Testimonials = require("../models/TestimonialsModel");
const asyncHandler = require("express-async-handler");


const getTestimonialList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalTestimonial = await Testimonials.countDocuments();
      const totalPages = Math.ceil(totalTestimonial / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allTestimonial = await Testimonials.find(req.query).skip((page - 1) * limit).limit(limit)
      .sort("createdAt : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Testimonials List',
      data: allTestimonial,
      page,
      nextPage,
      totalPages,
      totalTestimonial
    })
  } catch (error) {
    throw new Error(error);
  }
});

const getTestimonialById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaTestimonial = await Testimonials.findById(id)
    res.json(getaTestimonial);
  } catch (error) {
    throw new Error(error);
  }
});

const createTestimonial = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Testimonial = await Testimonials.create(req.body);
    res.json(Testimonial);
  } catch (error) {
    throw new Error(error);
  }
});
const updateTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedTestimonial = await Testimonials.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedTestimonial);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedTestimonial = await Testimonials.findByIdAndDelete(id);
    res.json(deletedTestimonial);
  } catch (error) {
    throw new Error(error);
  }
});


const getSearchTestimonial = asyncHandler(async (req, res) => {
  try {
    const getSearchTestimonial = await Testimonials.find({

      "$or":[
        {testimonial:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchTestimonial);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getTestimonialList,
  getTestimonialById,
  getSearchTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
