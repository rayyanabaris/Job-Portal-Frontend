const router = require("express").Router();

const {
  getFunAreasList,
  createFunAreas,
  updateFunAreas,
  deleteFunAreas,
  getFunAreasById,
  getSearchFunAreas,
} = require("../controller/FunAreaCtrl");

router.get("/", getFunAreasList);
router.get("/:id", getFunAreasById);
router.post("/add", createFunAreas);
router.put("/update/:id", updateFunAreas);
router.delete("/delete/:id", deleteFunAreas);
router.get("/search/:key", getSearchFunAreas);

module.exports = router;
