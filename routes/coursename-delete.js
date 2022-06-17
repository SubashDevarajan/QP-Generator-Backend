import express from "express";
import pool from "../db.js";

const deleteCoursename = express();
deleteCoursename.delete("/coursedelete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log("Delete course details");
    const newDetails = await pool.query(
      "DELETE FROM course_details WHERE coursecode=$1 RETURNING *",
      [id]
    );
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default deleteCoursename;
