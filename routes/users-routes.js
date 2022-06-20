import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import { accessToken, jwtTokens } from "../utils/helpers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
      [req.body.name, req.body.email, hashedPassword]
    );
    res.json(jwtTokens(newUser.rows));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
