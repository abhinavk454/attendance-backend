import { Router } from "express";
import { loginMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", loginMiddleware, (req, res) => {
  res.send("Success");
});

export default router;
