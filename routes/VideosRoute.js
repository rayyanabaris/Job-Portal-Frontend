const router = require("express").Router();

const {
  getVideoList,
  createVideo,
  updateVideo,
  deleteVideo,
  getVideoById,
  getSearchVideo,
} = require("../controller/VideosCtrl");

router.get("/all", getVideoList);
router.get("/get/:id", getVideoById);
router.post("/add", createVideo);
router.put("/update/:id", updateVideo);
router.delete("/delete/:id", deleteVideo);
router.get("/search/:key", getSearchVideo);

module.exports = router;
