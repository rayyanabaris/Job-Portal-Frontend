const router = require("express").Router();

const {
  getBlogList,
  createBlog,
  getFilterBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getSearchBlog,
} = require("../controller/BlogCtrl");



router.get("/all", getBlogList);
router.get("/get/:id", getBlogById);
router.get("/filter", getFilterBlog);
router.post("/add", createBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/search/:key", getSearchBlog);

module.exports = router;
