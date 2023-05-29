import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "@/lib/DBconnection";
export default function getTotalStaff(req, res){

    const getMethod = () => {
        connection.query(`SELECT COUNT(staff_id) AS staffNum FROM staff`,
        (err, results, fields) =>{ 

            if(results.length != 0 && !err){
                return res.status(200).json(results);
            }else{
                return res.status(204).json({error: "Invalid ID"});
            }
        })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({message: "Method Not Allowed. Use GET only"})
    }
    
}

