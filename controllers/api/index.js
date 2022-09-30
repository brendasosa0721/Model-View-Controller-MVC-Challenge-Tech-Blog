const router = require("express").Router();
const commentRoutes = require("./comment-routes");
router.use("/comments", commentRoutes);
const postRoutes = require("./post-routes");
router.use("/posts", postRoutes);
const userRoutes = require("./user-routes");
router.use("/users", userRoutes);

module.exports = router;
