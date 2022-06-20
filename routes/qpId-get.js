import express from "express";
import pool from "../db.js";

const getqpid = express();
getqpid.get("/qpid/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log("qp details get for specific user");
    const qp = await pool.query("Select * from qpdetails where qp_id=$1", [
      id,
    ]);
    res.json(qp);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default getqpid;
