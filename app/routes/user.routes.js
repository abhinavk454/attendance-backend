import { Router } from "express";
import {
  createUser,
  getUser,
  getUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.json("User Router");
});

userRouter.post("/create", createUser);
userRouter.get("/get", getUser);
userRouter.get("/get/:id", getUserById);
userRouter.delete("/delete/:id", deleteUserById);

export default userRouter;
