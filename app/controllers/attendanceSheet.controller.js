import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createAttendance = async (req, res) => {
  try {
    const newAttendance = await prisma.attendanceSheet.create({
      data: req.body,
    });
    return res.status(201).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getAllAttendance = async (req, res) => {
  try {
    const getAllAttendance = await prisma.attendanceSheet.findMany({});
    return res.json(getAllAttendance);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const attendance = await prisma.attendanceSheet.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(attendance);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteAttendanceById = async (req, res) => {
  try {
    await prisma.attendanceSheet.delete({
      where: { id: parseInt(req.params.id) },
    });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  deleteAttendanceById,
};
