import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../../lib/DBconnection"

export default function getฺBookById(req, res){

// GET Member with MemberID 
    const getMethod = () => {
        connection.query("SELECT * FROM books WHERE book_id = ?", [req.query.id],
        (err, results, fields) =>{ 

            if(results.length != 0 && !err){
                return res.status(200).json(results);
            }else{
                return res.status(400).json({error: "Invalid ID"});
            }
        })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({message: "Method Not Allowed. Use GET only"})
    }
    
}

