import express from 'express';
import pool from '../db.js';

const getUsers=express()

getUsers.get('/get', async (req, res) => {
    try {
        console.log("GET users")
        const users = await pool.query("Select * from users")
        res.json(users)
    }
    catch (error) {
        res.status(401).json({error: error.message});
    }
})

export default getUsers;