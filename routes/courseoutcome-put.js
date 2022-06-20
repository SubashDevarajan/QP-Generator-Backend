import express from "express";
import pool from "../db.js";

const updateCourseOutcome = express();

updateCourseOutcome.post("/updateCourseOutcome/", async (req, res) => {
  // const id = req.body.id;
  const { levels, coursecode, courseoutcomes } = req.body;
  try {
    const updateDetails = await pool.query(
      "UPDATE course_outcome SET courseoutcomes=$1 WHERE levels=$2 and coursecode=$3 RETURNING *",
      [courseoutcomes, levels, coursecode]
    );
    res.json(updateDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default updateCourseOutcome;
