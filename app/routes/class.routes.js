import { Router } from "express";

const classRouter = Router();

classRouter.get("/", (req, res) => {
  return res.json("Express + TypeScript Student");
});

export default classRouter;
