const allowedOrigins = [
  process.env.CLIENT_URL_1,
  process.env.CLIENT_URL_2,
  process.env.CLIENT_URL_3,
  process.env.CLIENT_URL_4,
  "http://localhost:5173",
];

const secureAccess = (req, res, next) => {
  const origin = req.headers.origin;
  const apiKey = req.headers["x-api-key"];

  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ message: "Forbidden: Invalid origin" });
  }

  if (apiKey !== process.env.FRONTEND_SECRET_KEY) {
    return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }

  next();
};

export default secureAccess;
