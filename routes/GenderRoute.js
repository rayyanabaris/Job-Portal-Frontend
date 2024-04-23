const router = require("express").Router();

const {
  getGenderList,
  createGender,
  updateGender,
  deleteGender,
  getGenderById,
  getSearchGender,
} = require("../controller/GenderCtrl");

router.get("/", getGenderList);
router.get("/:id", getGenderById);
router.post("/add", createGender);
router.put("/update/:id", updateGender);
router.delete("/delete/:id", deleteGender);
router.get("/search/:key", getSearchGender);

module.exports = router;
