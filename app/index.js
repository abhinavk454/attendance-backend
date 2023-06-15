import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import studentRouter from "./routes/student.routes.js";
import userRouter from "./routes/user.routes.js";
import classRouter from "./routes/class.routes.js";
import sectionRouter from "./routes/section.routes.js";
import attendanceRouter from "./routes/attendanceSheet.routes.js";
import chalk from "chalk";

dotenv.config();

const app = express();
const port = process.env["PORT"] || 8000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", studentRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);
app.use("/section", sectionRouter);
app.use("/attendance", attendanceRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => {
  console.log(
    chalk.blue.bold(`⚡️[Development]: Server is running at `) +
      chalk.red.bold(`http://localhost:${port}🔥`)
  );
});
