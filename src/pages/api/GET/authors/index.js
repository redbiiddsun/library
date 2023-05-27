import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../../lib/DBconnection"

export default function getAuthor(req, res){

    // GET Author 
    const getMethod = () => {
        connection.query("SELECT * FROM authors",
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

