const router = require("express").Router();

const {
  getLocationList,
  createLocation,
  getAllLocation,
  updateLocation,
  deleteLocation,
  getLocationById,
  getFilterLocation,
  getSearchLocation,
} = require("../controller/LocationCtrl");

router.get("/all", getLocationList);
router.get("/all-location", getAllLocation);
router.get("/get/:id", getLocationById);
router.get("/filter", getFilterLocation);
router.post("/add", createLocation);
router.put("/update/:id", updateLocation);
router.delete("/delete/:id", deleteLocation);
router.get("/search/:key", getSearchLocation);

module.exports = router;
