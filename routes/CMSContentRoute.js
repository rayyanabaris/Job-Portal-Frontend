const router = require("express").Router();

const {
  getCMSContentPageList,
  createCMSContentPage,
  updateCMSContentPage,
  getFilterCMSContent,
  deleteCMSContentPage,
  getCMSContentPageById,
  getSearchCMSContentPage,
} = require("../controller/CMSContentCtrl");

router.get("/all", getCMSContentPageList);
router.get("/get/:id", getCMSContentPageById);
router.get("/filter", getFilterCMSContent);
router.post("/add", createCMSContentPage);
router.put("/update/:id", updateCMSContentPage);
router.delete("/delete/:id", deleteCMSContentPage);
router.get("/search/:key", getSearchCMSContentPage);

module.exports = router;
