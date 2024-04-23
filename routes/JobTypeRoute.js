const router = require("express").Router();

const {
  getJobTypeList,
  createJobType,
  updateJobType,
  deleteJobType,
  getJobTypeById,
  getSearchJobType,
} = require("../controller/JobTypeCtrl");

router.get("/", getJobTypeList);
router.get("/:id", getJobTypeById);
router.post("/add", createJobType);
router.put("/update/:id", updateJobType);
router.delete("/delete/:id", deleteJobType);
router.get("/search/:key", getSearchJobType);

module.exports = router;
