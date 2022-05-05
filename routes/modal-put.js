import express from 'express';
import pool from '../db.js';

const updateDetails = express();

updateDetails.put('/updateDetails/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const updateDetails = await pool.query('UPDATE course_details SET cousename=$1 WHERE coursecode=$2 RETURNING *', [req.body.coursename,id]);
        res.json(updateDetails);
    }
    catch (error) {
        res.status(401).json({error: error.message});
      }
})

export default updateDetails;