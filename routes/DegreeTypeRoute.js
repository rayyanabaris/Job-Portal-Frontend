const router = require("express").Router();

const {
  getDegreeTypeList,
  createDegreeType,
  updateDegreeType,
  deleteDegreeType,
  getDegreeTypeById,
  getSearchDegreeType,
} = require("../controller/DegreeTypeCtrl");

router.get("/", getDegreeTypeList);
router.get("/:id", getDegreeTypeById);
router.post("/add", createDegreeType);
router.put("/update/:id", updateDegreeType);
router.delete("/delete/:id", deleteDegreeType);
router.get("/search/:key", getSearchDegreeType);

module.exports = router;
