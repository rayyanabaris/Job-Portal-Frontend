const router = require("express").Router();

const {
  getSliderList,
  createSlider,
  updateSlider,
  deleteSlider,
  getSliderById,
  getSearchSlider,
} = require("../controller/SliderCtrl");

router.get("/all", getSliderList);
router.get("/get/:id", getSliderById);
router.post("/add", createSlider);
router.put("/update/:id", updateSlider);
router.delete("/delete/:id", deleteSlider);
router.get("/search/:key", getSearchSlider);

module.exports = router;
