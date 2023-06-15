import { Router } from "express";
import {
  createClass,
  getAllClass,
  getClassById,
  deleteClassById,
} from "../controllers/class.controller.js";

const classRouter = Router();

classRouter.get("/", (req, res) => {
  return res.json("Class Router");
});

classRouter.post("/create", createClass);
classRouter.get("/get", getAllClass);
classRouter.get("/get/:id", getClassById);
classRouter.delete("/delete/:id", deleteClassById);

export default classRouter;
