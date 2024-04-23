const router = require("express").Router();

const {
  getStatesList,
  getFilterStates,
  createStates,
  updateStates,
  deleteStates,
  getStatesById,
  getSearchStates,
} = require("../controller/StatesCtrl");

router.get("/all", getStatesList);
router.get("/filter", getFilterStates);
router.get("/get/:id", getStatesById);
router.post("/add", createStates);
router.put("/update/:id", updateStates);
router.delete("/delete/:id", deleteStates);
router.get("/search/:key", getSearchStates);

module.exports = router;
