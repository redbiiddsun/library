import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function insertRequestBook(req, res){
    
    const postMethod = () => {
      const {memberID} = req.body;
      
      connection.query(`INSERT INTO requestbooks (request_id,member_id,requestbook_created)VALUES (NULL, ?, current_timestamp())`,
        [memberID],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "New Requestbook successfuly requested!", RequestbookID: results.insertId})
      })
    }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use POST only"})
  }

}
