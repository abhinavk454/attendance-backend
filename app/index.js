import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import studentRouter from "./routes/student.routes.js";
import userRouter from "./routes/user.routes.js";
import classRouter from "./routes/class.routes.js";
import sectionRouter from "./routes/section.routes.js";
import attendanceRouter from "./routes/attendanceSheet.routes.js";
import authRouter from "./routes/auth.routes.js";
import chalk from "chalk";
import session from "express-session";
import passport from "passport";
import { initializePassport } from "./utils/passportStrategy.js";

dotenv.config();

const app = express();
const port = process.env["PORT"] || 8000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env["SESSION_SECRET"],
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
app.use("/student", studentRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);
app.use("/section", sectionRouter);
app.use("/attendance", attendanceRouter);
app.use("/auth", authRouter);

app.post("/hh", (req, res) => {
  res.json("failure");
});

app.get("/hh", (req, res) => {
  res.json("failure-get");
});
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(
    chalk.blue.bold(`⚡️[Prod]: Server is running at `) +
      chalk.red.bold(`http://0.0.0.0:${port}🔥`)
  );
});
