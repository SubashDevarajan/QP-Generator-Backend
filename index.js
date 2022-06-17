import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import usersRouter from "./routes/users-routes.js";
import authRouter from "./routes/auth-routes.js";
import getUsers from "./routes/user-get.js";
import getCoursename from "./routes/coursename-get.js";
import getCourseoutcome from "./routes/courseoutcome-get.js";
import { getbldetails_all } from "./routes/bldetails-get.js";
import { getbldetails_blLevel } from "./routes/bldetails-get.js";
import setDetails from "./routes/form-post.js";
import updateDetails from "./routes/modal-put.js";
import getqp from "./routes/qp-get.js";
import postqpDetails from "./routes/qp-post.js";
import { authenticateToken } from "./middleware/authorization.js";
import updateCourseOutcome from "./routes/courseoutcome-put.js";
import postDetails from "./routes/courseoutcome-post.js";
import getCourse from "./routes/admin.js";
import postCoursename from "./routes/coursename-post.js";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.URL || "*" };

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use("/", express.static(join(__dirname, "public")));
app.use("/api/auth", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/", getUsers);
app.use("/api/", getCoursename);
app.use("/api/", postCoursename);
app.use("/api/", getCourseoutcome);
app.use("/api/", updateCourseOutcome);
app.use("/api/", postDetails);
app.use("/api/", getbldetails_all);
app.use("/api/", getbldetails_blLevel);
app.use("/api/", setDetails);
app.use("/api/", updateDetails);
app.use("/api/", postqpDetails);
app.use("/api/", getCourse);
// app.use("/api/", authenticateToken, getqp);

app.listen(PORT, () => {
  console.log(`Server is Listening on port:${PORT}`);
});
