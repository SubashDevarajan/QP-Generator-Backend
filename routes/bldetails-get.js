import express from 'express';
import pool from '../db.js';

const getbldetails = express();
getbldetails.get("/bldetails/:id", async (req, res)=>{
    try {
        //const { id, username } = req.body;
        console.log("hello")
        const bl = await pool.query("Select * from bl_details Where bl_level=")
        res.json(bl)
    }
    catch (error) {
        res.status(401).json({error: error.message});
    }
})

export default getbldetails;