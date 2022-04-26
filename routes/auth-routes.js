import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import { jwtTokens , accessToken} from '../utils/helpers.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
    const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
    if (!validPassword) return res.status(401).json({error: "Incorrect password"});
    let tokens = jwtTokens(users.rows[0]);
    console.log("swrkjbdqwhj")
    res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
    res.json(tokens);
  } catch (error) {
    res.status(401).json({error: error.message});
  }

});

router.get('/refresh_token', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const refreshToken = authHeader && authHeader.split(' ')[1];
    if (refreshToken === null) return res.sendStatus(401).json({error:"Null refresh token"});
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) return res.status(403).json({error:error.message});
      let tokens = accessToken(user);
      res.json(tokens);
    });
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

export default router;