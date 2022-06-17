import express from "express";
import pool from "../db.js";

const postqpDetails = express();

postqpDetails.post("/postqp", async (req, res) => {
  try {
    console.log("Qp details post");
    const { user_id, qp_info, qp_details } = req.body;
    const newDetails = await pool.query(
      "INSERT INTO qpdetails (user_id,qp_info,qp_details) VALUES ($1,$2,$3) RETURNING qp_id",
      [user_id, qp_info, qp_details]
    );
    res.json(newDetails.rows);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default postqpDetails;
