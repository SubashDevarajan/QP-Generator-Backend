import express from "express";
import pool from "../db.js";

const setDetails = express();

setDetails.post("/formDetails", async (req, res) => {
  try {
    //const { department,branch,semester,regulation,codeAndTitle } = req.body;
    const newDetails = await pool.query(
      "INSERT INTO details (department,branch,semester,regulation,subject_code_and_title) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [
        req.body.department,
        req.body.branch,
        req.body.semester,
        req.body.regulation,
        req.body.courseAndTitle,
      ]
    );
    res.json(newDetails.rows);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default setDetails;
