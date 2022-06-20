import express from "express";
import pool from "../db.js";

const getCourseoutcome = express();
getCourseoutcome.get("/courseoutcome/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log("GET course outcome with coursecode");
    const course = await pool.query(
      "Select * from course_outcome Where coursecode = $1 order by levels",
      [id]
    );
    res.json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getCourseoutcome;
