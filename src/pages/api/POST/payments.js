import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function insertMember(req, res){
    
    const postMethod = () => {
      const {paymentID,checkoutID,staffID,totalamount} = req.body;
      
      connection.query(`INSERT INTO payments (payment_id, checkout_id, staff_id, payment_datetime, 
        TotalAmount )VALUES (NULL, ?, ?, current_timestamp(), ?)`,
        [paymentID,checkoutID,staffID,totalamount],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "New member successfuly created!", memberID: results.insertId})
      })
    }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use POST only"})
  }

}
