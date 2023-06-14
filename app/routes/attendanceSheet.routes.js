import { Router } from "express";

const attendanceRouter = Router();

attendanceRouter.get("/", (req, res) => {
  return res.json("Express + TypeScript Student");
});

export default attendanceRouter;
