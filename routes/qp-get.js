import express from "express";
import pool from "../db.js";

const getqp = express();
getqp.get("/qp/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log("qp details get for specific user");
    const qp = await pool.query("Select * from qpdetails where user_id=$1", [
      id,
    ]);
    res.json(qp);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getqp;
