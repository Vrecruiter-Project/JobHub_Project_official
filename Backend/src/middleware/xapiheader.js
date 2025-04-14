const allowedOrigins = ['https://jobhub.world', 'https://admin.jobhub.world' , 'http://localhost:5173'];

const secureAccess = (req, res, next) => {
  const origin = req.headers.origin;
  const apiKey = req.headers['x-api-key'];

  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ message: 'Forbidden: Invalid origin' });
  }

  if (apiKey !== process.env.FRONTEND_SECRET_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }

  next();
};

export default secureAccess;
