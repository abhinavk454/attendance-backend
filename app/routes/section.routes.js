import { Router } from "express";
import {
  createSection,
  getAllSection,
  getSectionById,
  deleteSectionById,
} from "../controllers/section.controller.js";

const sectionRouter = Router();

sectionRouter.get("/", (req, res) => {
  return res.json("Section Router");
});

sectionRouter.post("/create", createSection);
sectionRouter.get("/get", getAllSection);
sectionRouter.get("/get/:id", getSectionById);
sectionRouter.delete("/delete/:id", deleteSectionById);

export default sectionRouter;
