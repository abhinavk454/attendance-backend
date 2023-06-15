import { Router } from "express";
import {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  deleteAttendanceById,
} from "../controllers/attendanceSheet.controller.js";

const attendanceRouter = Router();

attendanceRouter.get("/", (req, res) => {
  return res.json("Attendance Router");
});

attendanceRouter.post("/create", createAttendance);
attendanceRouter.get("/get", getAllAttendance);
attendanceRouter.get("/get/:id", getAttendanceById);
attendanceRouter.delete("/delete/:id", deleteAttendanceById);

export default attendanceRouter;
