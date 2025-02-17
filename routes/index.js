const router = require("express").Router();
const nftRoute = require("./nftRoutes");

router.use("/nft", nftRoute);

module.exports = router;
