import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  console.log('in')
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  console.log(1)
  if (token == null) return res.status(401).json({ error: "Null token" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    console.log("error");
    if (error) return res.status(403).json({ error: error.message });
    req.user = user;
    next();
  });
}

export { authenticateToken };
