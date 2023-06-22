import passport from "passport";
import JWT from "jsonwebtoken";

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized ❤️" });
};

export const loginMiddleware = (req, res, next) => {
  passport.authenticate("local", { session: false }, (user, err, info) => {
    if (err || !user) {
      return res.status(400).json(info);
    }

    const payload = { username: user.username };
    const secretKey = "payload-secret";
    const token = JWT.sign(payload, secretKey);

    res.locals.token = token;
    next();
  })(req, res);
};

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  const secretKey = "payload-secret";

  try {
    const decode = JWT.verify(token.split(" ")[1], secretKey);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token." });
  }
};
