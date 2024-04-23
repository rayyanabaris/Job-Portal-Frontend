const router = require("express").Router();

const {
  getLanguageLevelList,
  createLanguageLevel,
  updateLanguageLevel,
  deleteLanguageLevel,
  getLanguageLevelById,
  getSearchLanguageLevel,
} = require("../controller/LanguageLevelCtrl");

router.get("/", getLanguageLevelList);
router.get("/:id", getLanguageLevelById);
router.post("/add", createLanguageLevel);
router.put("/update/:id", updateLanguageLevel);
router.delete("/delete/:id", deleteLanguageLevel);
router.get("/search/:key", getSearchLanguageLevel);

module.exports = router;
