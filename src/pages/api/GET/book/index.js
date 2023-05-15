import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function Book(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
    const getMethod = () => {
      connection.query("SELECT * FROM books",
      (err, results, fields) =>{

        if(err){
          console.log(err)
          return res.status(400).send({Error: err});
        }
          return res.status(200).json(results)
        })
    }
  
  if (req.method === 'GET') {
    getMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use GET only"})
  }
}

