const router = require("express").Router();

const {
  getPositionList,
  createPosition,
  updatePosition,
  deletePosition,
  getPositionById,
  getSearchPosition,
} = require("../controller/PositionCtrl");

router.get("/", getPositionList);
router.get("/:id", getPositionById);
router.post("/add", createPosition);
router.put("/update/:id", updatePosition);
router.delete("/delete/:id", deletePosition);
router.get("/search/:key", getSearchPosition);

module.exports = router;
