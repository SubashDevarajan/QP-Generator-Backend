import express from "express";
import pool from "../db.js";

const deleteQp = express();
deleteQp.delete("/qpdelete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    const newDetails = await pool.query(
      "DELETE FROM qpdetails WHERE qp_id=$1 RETURNING *",
      [id]
    );
    console.log(2)
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default deleteQp;
