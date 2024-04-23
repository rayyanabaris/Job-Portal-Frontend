const router = require("express").Router();

const {
  getcandidateList,
  addcandidate,
  updatecandidate,
  deletecandidate,
  getcandidateById,
  getSearchcandidate,
  getfiltercandidateList,
} = require("../controller/CandidateCtrl");

router.get("/all", getcandidateList);
router.get("/get/:id", getcandidateById);
router.get("/filter", getfiltercandidateList);
router.post("/add", addcandidate);
router.put("/update/:id", updatecandidate);
router.delete("/delete/:id", deletecandidate);
router.get("/search/:key", getSearchcandidate);



module.exports = router;
