const router = require("express").Router();

const {
  getCountriesList,
  createCountries,
  getFilterCountries,
  updateCountries,
  deleteCountries,
  getCountriesById,
  getSearchCountries,
} = require("../controller/CountriesCtrl");

router.get("/all", getCountriesList);
router.get("/filter", getFilterCountries);
router.get("/get/:id", getCountriesById);
router.post("/add", createCountries);
router.put("/update/:id", updateCountries);
router.delete("/delete/:id", deleteCountries);
router.get("/search/:key", getSearchCountries);

module.exports = router;
