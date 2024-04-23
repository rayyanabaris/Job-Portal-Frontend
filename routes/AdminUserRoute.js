const express = require("express");
const {
  createUser,
    loginUserCtrl,
    loginAdmin,
    getaUserByID,
    updatedUser,
    logout,
    handleRefreshToken,
    updatePassword,

} = require("../controller/AdminUserCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/get/:id", getaUserByID);
router.post("/admin-login", loginAdmin);
router.get("/logout", logout);
router.put("/edit/:id", updatedUser);
router.get("/refresh", handleRefreshToken);
router.put("/password", authMiddleware, updatePassword);



module.exports = router;
