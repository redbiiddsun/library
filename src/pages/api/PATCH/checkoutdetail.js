import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function updateCheckoutDetail(req, res){
     
    const postMethod = () => {
      const {checkout_id, book_id} = req.body;
      

      connection.query(`UPDATE checkoutsdetail SET is_returned = 1 WHERE checkout_id =? AND book_id =?`,
        [checkout_id, book_id],
        (err, results, fields) =>{
          if(err){
            console.log("Error while updating", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "checkoutsdetail successfuly updated!"})
      })
    }

  if (req.method === 'PATCH') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use PATCH only"})
  }

}

