import express from "express";
import pool from "../db.js";

const putqpDetails = express();

putqpDetails.put("/putqp", async (req, res) => {
  // const id = req.params.id;
  try {
    console.log(req.body);
    const newDetails = await pool.query(
      "UPDATE qpdetails SET qp_info=$1,qp_details=$2 WHERE qp_id=$3 RETURNING *",
      [req.body.qp_info, req.body.qp_details, req.body.id]
    );
    res.json(newDetails);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default putqpDetails;