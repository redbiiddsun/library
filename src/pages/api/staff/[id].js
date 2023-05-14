import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getMemberById(req, res){

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
    // GET Staff with MemberID 
    const getMethod = () => {
    
    }
    
    const postMethod = () => {
        
    }

    if (req.method === 'POST') {
        postMethod();
    } else {
        getMethod();
    }
    
}

