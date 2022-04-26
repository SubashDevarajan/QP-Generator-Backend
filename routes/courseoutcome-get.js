import express from 'express';
import pool from '../db.js';

const getCourseoutcome = express();
getCourseoutcome.get("/courseoutcome", async (req, res)=>{
    try {
        //const { id, useroutcome } = req.body;
        console.log("hello")
        const course = await pool.query("Select * from course_outcome")
        res.json(course)
    }
    catch (error) {
        res.status(401).json({error: error.message});
    }
})

export default getCourseoutcome;