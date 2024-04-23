const router = require("express").Router();

const {
  getResultTypeList,
  createResultType,
  updateResultType,
  deleteResultType,
  getResultTypeById,
  getSearchResultType,
} = require("../controller/ResultTypeCtrl");

router.get("/", getResultTypeList);
router.get("/:id", getResultTypeById);
router.post("/add", createResultType);
router.put("/update/:id", updateResultType);
router.delete("/delete/:id", deleteResultType);
router.get("/search/:key", getSearchResultType);

module.exports = router;
