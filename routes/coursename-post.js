import express from "express";
import pool from "../db.js";

const postCoursename = express();
postCoursename.post("/coursepost", async (req, res) => {
  try {
    console.log("POST course details");
    const { coursecode, coursename } = req.body;
    const newDetails = await pool.query(
      "INSERT INTO course_details (coursecode,coursename) VALUES ($1,$2) RETURNING *",
      [coursecode, coursename]
    );
    res.json(newDetails.rows);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default postCoursename;
