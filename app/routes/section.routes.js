import { Router } from "express";

const sectionRouter = Router();

sectionRouter.get("/", (req, res) => {
  return res.json("Express + TypeScript Student");
});

export default sectionRouter;
