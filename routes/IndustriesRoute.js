const router = require("express").Router();

const {
  getIndustriesList,
  createIndustries,
  updateIndustries,
  deleteIndustries,
  getIndustriesById,
  getSearchIndustries,
} = require("../controller/IndustriesCtrl");

router.get("/", getIndustriesList);
router.get("/:id", getIndustriesById);
router.post("/add", createIndustries);
router.put("/update/:id", updateIndustries);
router.delete("/delete/:id", deleteIndustries);
router.get("/search/:key", getSearchIndustries);

module.exports = router;
