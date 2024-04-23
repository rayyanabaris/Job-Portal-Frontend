const router = require("express").Router();

const {
  getCompaniesList,
  getCompaniesByFilter,
  getCompaniesById,
  getActiveCompaniesList,
  getFeaturedCompaniesList,
  getNewCompaniesList,
  getSearchCompanies,
} = require("../controller/CompaniesCtrl");

router.get("/all", getCompaniesList);
router.get("/get/:id", getCompaniesById);
router.get("/filter", getCompaniesByFilter);
router.get("/active", getActiveCompaniesList);
router.get("/featured", getFeaturedCompaniesList);
router.get("/latest", getNewCompaniesList);
router.get("/search/:key", getSearchCompanies);

module.exports = router;
