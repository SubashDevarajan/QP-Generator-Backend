import express from "express";
import pool from "../db.js";

const getCoursename = express();
getCoursename.get("/course", async (req, res) => {
  try {
    console.log("GET course details");
    const course = await pool.query("Select * from course_details");
    res.json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getCoursename;
