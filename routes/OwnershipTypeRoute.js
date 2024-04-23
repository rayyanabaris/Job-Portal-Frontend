const router = require("express").Router();

const {
  getOwnershipTypeList,
  createOwnershipType,
  updateOwnershipType,
  deleteOwnershipType,
  getOwnershipTypeById,
  getSearchOwnershipType,
} = require("../controller/OwnershipTypeCtrl");

router.get("/", getOwnershipTypeList);
router.get("/:id", getOwnershipTypeById);
router.post("/add", createOwnershipType);
router.put("/update/:id", updateOwnershipType);
router.delete("/delete/:id", deleteOwnershipType);
router.get("/search/:key", getSearchOwnershipType);

module.exports = router;
