import express from 'express';
import pool from '../db.js';
// import { Sequelize } from 'sequelize/types';

const getUsers=express()

getUsers.get('/get', async (req, res) => {
    try {
        //const { id, username } = req.body;
        console.log("hello")
        const users = await pool.query("Select * from users")
        res.json(users)
    }
    catch (error) {
        res.status(401).json({error: error.message});
    }
})

export default getUsers;