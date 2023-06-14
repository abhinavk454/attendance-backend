import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.json("Express + TypeScript User");
});

userRouter.post("/create", createUser);
userRouter.get("/get", getUser);

export default userRouter;
