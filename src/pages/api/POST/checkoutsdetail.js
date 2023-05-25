import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function insertCheckoutDetail(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

    const postMethod = () => {
      const {checkoutID,bookID,returned} = req.body;
      
      connection.query(`INSERT INTO checkoutsdetail (checkout_id,book_id,checkout_date,return_duration_date,is_returned) VALUES (?, ?, current_timestamp(), current_timestamp(), ?)`,
        [checkoutID,bookID,returned],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "New checkoutsdetail successfuly created!", checkoutID: results.insertId})
      })
    }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use POST only"})
  }

}
