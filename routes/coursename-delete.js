import express from "express";
import pool from "../db.js";

const deleteCoursename = express();
deleteCoursename.delete("/coursedelete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    const newDetails = await pool.query(
      "DELETE FROM course_details WHERE coursecode=$1 RETURNING *",
      [id]
    );
    const newDetailss = await pool.query(
      "DELETE FROM course_outcome WHERE coursecode=$1 RETURNING *",
      [id]
    );
    console.log(2)
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default deleteCoursename;
