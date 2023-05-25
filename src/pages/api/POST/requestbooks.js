import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function insertMember(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

    const postMethod = () => {
      const {memberID} = req.body;
      
      connection.query(`INSERT INTO requestbooks (request_id,member_id,requestbook_created)VALUES (NULL, ?, current_timestamp())`,
        [memberID],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "New book successfuly requested!", memberID: results.insertId})
      })
    }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use POST only"})
  }

}
