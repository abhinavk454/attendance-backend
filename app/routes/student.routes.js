import { Router } from "express";
import {
  createStudent,
  getStudent,
  getStudentById,
  deleteStudentById,
} from "../controllers/student.controller.js";

const studentRouter = Router();

studentRouter.get("/", (req, res) => {
  return res.json("Student Router");
});

studentRouter.post("/create", createStudent);
studentRouter.get("/get", getStudent);
studentRouter.get("/get/:id", getStudentById);
studentRouter.delete("/delete/:id", deleteStudentById);

export default studentRouter;
