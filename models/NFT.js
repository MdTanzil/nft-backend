const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  nftName: { type: String, required: true },
  nftDescription: { type: String, required: true },
  nftLogoUrl: { type: String, required: true },
  nftID: { type: Number, unique: true, required: true },
  userWalletAddress: { type: String, required: true },
});

module.exports = mongoose.model("NFT", NFTSchema);
