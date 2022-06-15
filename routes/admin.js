import express from 'express';
import pool from '../db.js';

const getCourse = express();
getCourse.get("/getcourse", async (req, res)=>{
    try {
        console.log("Admin course get")
        const course = await pool.query("Select * from outcome")
        res.json(course)
    }
    catch (error) {
        res.status(401).json({error: error.message});
    }
})

export default getCourse;