const router = require("express").Router();

const {
  getMajorSubjectList,
  createMajorSubject,
  updateMajorSubject,
  deleteMajorSubject,
  getMajorSubjectById,
  getSearchMajorSubject,
} = require("../controller/MajorSubjectCtrl");

router.get("/", getMajorSubjectList);
router.get("/:id", getMajorSubjectById);
router.post("/add", createMajorSubject);
router.put("/update/:id", updateMajorSubject);
router.delete("/delete/:id", deleteMajorSubject);
router.get("/search/:key", getSearchMajorSubject);

module.exports = router;
