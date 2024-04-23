const Sliders = require("../models/SliderModel");
const asyncHandler = require("express-async-handler");


const getSliderList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalSlider = await Sliders.countDocuments();
      const totalPages = Math.ceil(totalSlider / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allSlider = await Sliders.find().skip((page - 1) * limit).limit(limit)
      .sort("createdAt : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Sliders List',
      data: allSlider,
      page,
      nextPage,
      totalPages,
      totalSlider
    })
  } catch (error) {
    throw new Error(error);
  }
});

const getSliderById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaSlider = await Sliders.findById(id)
    res.json(getaSlider);
  } catch (error) {
    throw new Error(error);
  }
});

const createSlider = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Slider = await Sliders.create(req.body);
    res.json(Slider);
  } catch (error) {
    throw new Error(error);
  }
});
const updateSlider = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedSlider = await Sliders.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedSlider);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteSlider = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedSlider = await Sliders.findByIdAndDelete(id);
    res.json(deletedSlider);
  } catch (error) {
    throw new Error(error);
  }
});


const getSearchSlider = asyncHandler(async (req, res) => {
  try {
    const getSearchSlider = await Sliders.find({

      "$or":[
        {slider_heading:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchSlider);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getSliderList,
  getSliderById,
  getSearchSlider,
  createSlider,
  updateSlider,
  deleteSlider,
};
