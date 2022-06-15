import express from "express";
import pool from "../db.js";

const updateCourseOutcome = express();

updateCourseOutcome.put("/updateCourseOutcome/:id", async (req, res) => {
    const id = req.params.id;
    const courseoutcome = req.body;
  try {
    const updateDetails = await pool.query(
      "UPDATE course_outcome SET cousename=$1 WHERE coursecode=$2 RETURNING *",
      [req.body.courseoutcome, id]
    );
    res.json(updateDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default updateCourseOutcome;
