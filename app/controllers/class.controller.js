import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createClass = async (req, res) => {
  try {
    const newClass = await prisma.class.create({ data: req.body });
    return res.status(201).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getAllClass = async (req, res) => {
  try {
    const getAllClass = await prisma.class.findMany({});
    return res.json(getAllClass);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getClassById = async (req, res) => {
  try {
    const cl = await prisma.class.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(cl);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteClassById = async (req, res) => {
  try {
    await prisma.class.delete({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { createClass, getAllClass, getClassById, deleteClassById };
