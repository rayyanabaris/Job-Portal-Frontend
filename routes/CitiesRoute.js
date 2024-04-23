const router = require("express").Router();

const {
  getCitiesList,
  createCities,
  getFilterCities,
  updateCities,
  deleteCities,
  getCitiesById,
  getSearchCities,
} = require("../controller/CitiesCtrl");

router.get("/all", getCitiesList);
router.get("/get/:id", getCitiesById);
router.get("/filter", getFilterCities);
router.post("/add", createCities);
router.put("/update/:id", updateCities);
router.delete("/delete/:id", deleteCities);
router.get("/search/:key", getSearchCities);

module.exports = router;
