import express from "express";
import pool from "../db.js";

const putCoursename = express();
putCoursename.put("/courseput", async (req, res) => {
  // const id = req.params.id;
  const {coursecode,coursename} = req.body;
  try {
    console.log(coursename, coursecode);
    const newDetails = await pool.query(
      "UPDATE course_details SET coursename=$1 WHERE coursecode=$2 RETURNING *",
      [coursename, coursecode]
    );
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default putCoursename;
