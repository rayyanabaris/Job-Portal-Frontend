const router = require("express").Router();

const {
  getCurrenciesList,
  createCurrencies,
  updateCurrencies,
  deleteCurrencies,
  getCurrenciesById,
  getSearchCurrencies,
} = require("../controller/CurrenciesCtrl");

router.get("/", getCurrenciesList);
router.get("/:id", getCurrenciesById);
router.post("/add", createCurrencies);
router.put("/update/:id", updateCurrencies);
router.delete("/delete/:id", deleteCurrencies);
router.get("/search/:key", getSearchCurrencies);

module.exports = router;
