import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../../lib/DBconnection"

export default function getMember(req, res){
    
    const getMethod = () => {
      connection.query("SELECT * FROM member",
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

