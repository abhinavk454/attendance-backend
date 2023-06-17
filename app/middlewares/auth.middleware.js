import passport from "passport";

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
    next();
  })(req, res);
};
