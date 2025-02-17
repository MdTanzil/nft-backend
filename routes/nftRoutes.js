const {
  createNFT,
  getDataNftByID,
  nftGalleryByWallet,
} = require("../controllers/nftControllers");

const router = require("express").Router();

/**
 * @swagger
 * /api/nft:
 *   post:
 *     summary: Store NFT Data
 *     description: Stores the provided NFT data in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nftName:
 *                 type: string
 *                 example: "Crypto Art #1"
 *               nftDescription:
 *                 type: string
 *                 example: "This is a unique digital artwork."
 *               nftLogoUrl:
 *                 type: string
 *                 example: "https://example.com/nft.png"
 *               nftID:
 *                 type: number
 *                 example: 1001
 *               userWalletAddress:
 *                 type: string
 *                 example: "0x123456789abcdef"
 *     responses:
 *       201:
 *         description: NFT stored successfully
 *       500:
 *         description: Internal Server Error
 */
router.post("", createNFT);

/**
 * @swagger
 * /api/nft/{id}:
 *   get:
 *     summary: Get NFT Data by ID
 *     description: Retrieves NFT data by its unique ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: NFT data retrieved successfully
 *       404:
 *         description: NFT not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/gallery/:wallet", nftGalleryByWallet);

/**
 * @swagger
 * /api/nft/gallery/{wallet}:
 *   get:
 *     summary: Get NFT Gallery by Wallet Address
 *     description: Retrieves a list of NFTs associated with a user's wallet address.
 *     parameters:
 *       - name: wallet
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of NFTs retrieved successfully
 *       500:
 *         description: Internal Server Error
 */
router.get("/:id", getDataNftByID);

module.exports = router;
