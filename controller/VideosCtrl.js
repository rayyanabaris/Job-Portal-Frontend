const Videos = require("../models/VideosModel");
const asyncHandler = require("express-async-handler");


const getVideoList = asyncHandler(async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const totalVideo = await Videos.countDocuments();
      const totalPages = Math.ceil(totalVideo / limit);
      const nextPage = page < totalPages ? page + 1: null;
      const allVideo = await Videos.find(req.query).skip((page - 1) * limit).limit(limit)
      .sort("createdAt : 1")
      .exec();
    
    return res.status(200).json({
      success: true,
      msg: 'Videos List',
      data: allVideo,
      page,
      nextPage,
      totalPages,
      totalVideo
    })
  } catch (error) {
    throw new Error(error);
  }
});

const getVideoById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaVideo = await Videos.findById(id)
    res.json(getaVideo);
  } catch (error) {
    throw new Error(error);
  }
});

const createVideo = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Video = await Videos.create(req.body);
    res.json(Video);
  } catch (error) {
    throw new Error(error);
  }
});
const updateVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedVideo = await Videos.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedVideo);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedVideo = await Videos.findByIdAndDelete(id);
    res.json(deletedVideo);
  } catch (error) {
    throw new Error(error);
  }
});


const getSearchVideo = asyncHandler(async (req, res) => {
  try {
    const getSearchVideo = await Videos.find({

      "$or":[
        {Video_title:{$regex:req.params.key}},
      ]
    });
    res.json(getSearchVideo);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getVideoList,
  getVideoById,
  getSearchVideo,
  createVideo,
  updateVideo,
  deleteVideo,
};
