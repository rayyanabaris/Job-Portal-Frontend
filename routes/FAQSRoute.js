const router = require("express").Router();

const {
  getFAQList,
  createFAQ,
  updateFAQ,
  deleteFAQ,
  getFilterFAQs,
  getFAQById,
  getSearchFAQ,
} = require("../controller/FAQSCtrl");

router.get("/all", getFAQList);
router.get("/get/:id", getFAQById);
router.get("/filter", getFilterFAQs);
router.post("/add", createFAQ);
router.put("/update/:id", updateFAQ);
router.delete("/delete/:id", deleteFAQ);
router.get("/search/:key", getSearchFAQ);

module.exports = router;
