import express from "express";
import pool from "../db.js";

const getCourseoutcome = express();
getCourseoutcome.get("/courseoutcome", async (req, res) => {
  try {
    const { coursecode } = req.body;
    console.log("hi");
    const course = await pool.query(
      "Select * from course_outcome Where coursecode=$1",
      [req.body.coursecode]
    );
    res.json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getCourseoutcome;
