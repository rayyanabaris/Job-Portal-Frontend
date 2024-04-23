const router = require("express").Router();

const {
  getCMSPageList,
  createCMSPage,
  updateCMSPage,
  getFilterCMS,
  deleteCMSPage,
  getCMSPageById,
  getSearchCMSPage,
} = require("../controller/CMSCtrl");

router.get("/all", getCMSPageList);
router.get("/get/:id", getCMSPageById);
router.get("/filter", getFilterCMS);
router.post("/add", createCMSPage);
router.put("/update/:id", updateCMSPage);
router.delete("/delete/:id", deleteCMSPage);
router.get("/search/:key", getSearchCMSPage);

module.exports = router;
