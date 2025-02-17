const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5000",
  "http://localhost:3000",
  "https://nft-frontend-pi.vercel.app",

  //   "https://stocksculpt.web.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`Blocked by CORS: ${origin}`); // Debugging log
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allows cookies & authentication headers
};

module.exports = { corsOptions };
