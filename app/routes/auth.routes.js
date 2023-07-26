import { Router } from "express";
import { loginMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", loginMiddleware, (req, res) => {
  return res.json({ auth_token: res.locals.token, id: res.locals.id });
});

export default router;
