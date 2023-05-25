import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function updateCheckoutDetail(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

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

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use PATCH only"})
  }

}

