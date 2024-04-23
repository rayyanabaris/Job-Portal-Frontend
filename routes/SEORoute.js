const router = require("express").Router();

const {
  getSEOPageList,
  createSEOPage,
  updateSEOPage,
  deleteSEOPage,
  getSEOPageById,
  getSearchSEOPage,
} = require("../controller/SEOCtrl");

router.get("/", getSEOPageList);
router.get("/:id", getSEOPageById);
router.post("/add", createSEOPage);
router.put("/update/:id", updateSEOPage);
router.delete("/delete/:id", deleteSEOPage);
router.get("/search/:key", getSearchSEOPage);

module.exports = router;
