import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getBookRequest(req, res){

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
    // GET Author 
    const getMethod = () => {
        connection.query("SELECT DISTINCT rb.request_id,rd.request_title, m.member_fname, m.member_lname, `language`, author_first_name,author_last_name, publisher FROM requestdetail rd,requestbooks rb,publishers p,authors a,`language` l,member m WHERE rd.publisher_id = p.publisher_id AND rd.author_id = a.author_id AND rd.language_id = l.language_id",
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

