import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getBorrowMemberStat(req, res){

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
    // GET Author 
    const getMethod = () => {
        connection.query("SELECT m.member_id,m.member_fname,m.member_lname ,COUNT(c.checkout_id+c.checkout_amount) AS statisticsborrowbooks FROM checkouts c, member m GROUP BY c.member_id",
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

