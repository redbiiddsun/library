import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function insertCheckout(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

    const postMethod = () => {
      const {checkoutID,memberID,amount,staffID} = req.body;
      
      connection.query(`INSERT INTO checkouts (checkout_id,member_id,checkout_amount,created_checkout,staff_id) VALUES (NULL, ?, ?, current_timestamp(), ?)`,
        [checkoutID,memberID,amount,staffID],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "New checkouts successfuly created!", checkoutID: results.insertId})
      })
    }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use POST only"})
  }

}
