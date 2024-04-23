const router = require("express").Router();

const {
  getBlogCategoryList,
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getFilterBlogCat,
  getBlogCategoryById,
  getSearchBlogCategory,
} = require("../controller/BlogCategoryCtrl");

router.get("/all", getBlogCategoryList);
router.get("/get/:id", getBlogCategoryById);
router.get("/filter", getFilterBlogCat);
router.post("/add", createBlogCategory);
router.put("/update/:id", updateBlogCategory);
router.delete("/delete/:id", deleteBlogCategory);
router.get("/search/:key", getSearchBlogCategory);

module.exports = router;
