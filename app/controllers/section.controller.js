import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createSection = async (req, res) => {
  try {
    const newSection = await prisma.section.create({ data: req.body });
    return res.status(201).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getAllSection = async (req, res) => {
  try {
    const getAllSection = await prisma.section.findMany({});
    return res.json(getAllSection);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getSectionById = async (req, res) => {
  try {
    const section = await prisma.section.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(section);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteSectionById = async (req, res) => {
  try {
    await prisma.section.delete({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { createSection, getAllSection, getSectionById, deleteSectionById };
