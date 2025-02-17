const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const { dbConnect } = require("./config/dbConnect");
const { corsOptions } = require("./config/cors");
const setupSwagger = require("./config/swaggerConfig");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));

// Connect to MongoDB
dbConnect();

// Home route
app.get("/", (req, res) => {
  res.send("server alive ");
});
// Routes
app.use(
  "/api",

  routes
);
// Setup Swagger
setupSwagger(app);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
