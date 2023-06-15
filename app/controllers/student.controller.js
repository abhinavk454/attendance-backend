import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createStudent = async (req, res) => {
  try {
    const newStudent = await prisma.student.create({ data: req.body });
    return res.status(201).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getStudent = async (req, res) => {
  try {
    const getAllStudent = await prisma.student.findMany({});
    return res.json(getAllStudent);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(student);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    await prisma.student.delete({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { createStudent, getStudent, getStudentById, deleteStudentById };
