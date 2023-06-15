import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({ data: req.body });
    return res.status(201).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getUser = async (req, res) => {
  try {
    const getAllUser = await prisma.user.findMany({
      include: {
        classes: true,
      },
    });
    return res.json(getAllUser);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteUserById = async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export { createUser, getUser, getUserById, deleteUserById };
