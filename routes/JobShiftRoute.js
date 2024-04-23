const router = require("express").Router();

const {
  getJobShiftList,
  createJobShift,
  updateJobShift,
  deleteJobShift,
  getJobShiftById,
  getSearchJobShift,
} = require("../controller/JobShiftCtrl");

router.get("/", getJobShiftList);
router.get("/:id", getJobShiftById);
router.post("/add", createJobShift);
router.put("/update/:id", updateJobShift);
router.delete("/delete/:id", deleteJobShift);
router.get("/search/:key", getSearchJobShift);

module.exports = router;
