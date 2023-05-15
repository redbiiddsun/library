import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getStaff(req, res){

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });

    const getMethod = () => {
       
    }
    
        
      
    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({message: "Method Not Allowed. Use GET only"})
    }
    
}