const router = require("express").Router();

const {
  getTestimonialList,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonialById,
  getSearchTestimonial,
} = require("../controller/TestimonialsCtrl");

router.get("/all", getTestimonialList);
router.get("/get/:id", getTestimonialById);
router.post("/add", createTestimonial);
router.put("/update/:id", updateTestimonial);
router.delete("/delete/:id", deleteTestimonial);
router.get("/search/:key", getSearchTestimonial);

module.exports = router;
