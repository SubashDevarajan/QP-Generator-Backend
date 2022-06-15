import express from "express";
import pool from "../db.js";

const postDetails = express();

postDetails.post("/postoutcome", async (req, res) => {
  try {
    const {level,coursecode,outcome } = req.body;
    const newDetails = await pool.query(
      "INSERT INTO course_outcome (levels,coursecode,courseoutcomes) VALUES ($1,$2,$3) RETURNING *",
      [
        req.body.level,
        req.body.coursecode,
        req.body.outcome
      ]
    );
    res.json(newDetails.rows);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default postDetails;
