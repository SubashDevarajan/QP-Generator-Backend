import express from "express";
import pool from "../db.js";

const putCoursename = express();
putCoursename.put("/courseput/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log("PUT course details");
    const newDetails = await pool.query(
      "UPDATE course_details SET coursename=$1 WHERE coursecode=$2 RETURNING *",
      [req.body.coursename, id]
    );
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default putCoursename;
