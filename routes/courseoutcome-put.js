import express from "express";
import pool from "../db.js";

const updateCourseOutcome = express();

updateCourseOutcome.put("/updateCourseOutcome/:id", async (req, res) => {
  const id = req.params.id;
  const { courseoutcomes, levels } = req.body;
  try {
    const updateDetails = await pool.query(
      "UPDATE course_outcome SET courseoutcomes=$1 WHERE levels=$2 and coursecode=$3 RETURNING *",
      [courseoutcomes, levels, id]
    );
    res.json(updateDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default updateCourseOutcome;
