const router = require("express").Router();

const {
  getJobExpList,
  createJobExp,
  updateJobExp,
  deleteJobExp,
  getJobExpById,
  getSearchJobExp,
} = require("../controller/JobExpCtrl");

router.get("/", getJobExpList);
router.get("/:id", getJobExpById);
router.post("/add", createJobExp);
router.put("/update/:id", updateJobExp);
router.delete("/delete/:id", deleteJobExp);
router.get("/search/:key", getSearchJobExp);

module.exports = router;
