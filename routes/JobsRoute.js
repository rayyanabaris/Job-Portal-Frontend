const router = require("express").Router();

const {
  getJobList,
  getFeaturedJobList,
  getActiveJobList,
  getNewJobList,
  getFilterJob,
  getJobById,
  getSearchJob,
} = require("../controller/JobsCtrl");

router.get("/all", getJobList);
router.get("/featured", getFeaturedJobList);
router.get("/active", getActiveJobList);
router.get("/latest", getNewJobList);
router.get("/get/:id", getJobById);
router.get("/filter", getFilterJob);
router.get("/search/:key", getSearchJob);

module.exports = router;
