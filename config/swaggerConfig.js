const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NFT Minting API",
      version: "1.0.0",
      description: "API for storing and retrieving NFT data",
    },
  },
  apis: [path.join(__dirname, "routes", "nftRoutes.js")], // Path to API route documentation edit here
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
