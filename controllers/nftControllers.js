const NFT = require("../models/NFT");

// Create a NFT object
const createNFT = async (req, res) => {
  try {
    const { nftName, nftDescription, nftLogoUrl, nftID, userWalletAddress } =
      req.body;
    const newNFT = new NFT({
      nftName,
      nftDescription,
      nftLogoUrl,
      nftID,
      userWalletAddress,
    });
    await newNFT.save();
    res.status(201).json({ metadataUrl: newNFT?.nftLogoUrl });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get NFT Data By ID
const getDataNftByID = async (req, res) => {
  try {
    const nft = await NFT.findOne({ nftID: req.params.id });
    if (!nft) return res.status(404).json({ error: "NFT not found" });
    res.status(200).json(nft);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// nft gallery by wallet address

const nftGalleryByWallet = async (req, res) => {
  try {
    const nfts = await NFT.find({ userWalletAddress: req.params.wallet });
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createNFT, getDataNftByID, nftGalleryByWallet };
