
const router = require("express").Router();
const homeRoutes = require("./home-routes")
router.use("/" , homeRoutes);
const dashboard = require("./dashboard-routes");
router.use("/dashboard" , dashboard);
const api = require("./api");
router.use('/api', api);


module.exports = router;