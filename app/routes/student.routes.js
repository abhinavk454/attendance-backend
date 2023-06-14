import { Router } from "express";

const studentRouter = Router();

studentRouter.get("/", (req, res) => {
  return res.json("Express + TypeScript Student");
});

export default studentRouter;
