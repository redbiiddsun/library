import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "@/lib/DBconnection";

export default function getBookRequest(req, res){

    
    // GET Author 
    const getMethod = () => {
        connection.query(`SELECT rb.request_id, CONCAT(m.member_fname," " ,m.member_lname) AS Member, rd.request_title, l.language, CONCAT(a.author_first_name," " ,a.author_last_name) AS Author,p.publisher FROM requestdetail rd, requestbooks rb , language l, authors a, publishers p, member m WHERE rd.request_id = rb.request_id AND rb.member_id = m.member_id AND rd.language_id = l.language_id AND rd.author_id = a.author_id AND rd.publisher_id = p.publisher_id AND DATE(rb.requestbook_created) = CURDATE()`,
        (err, results, fields) =>{ 

            if(results.length != 0 && !err){
                return res.status(200).json(results);
            }else{
                return res.status(204).json({error: "No data"});
            }
        })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({message: "Method Not Allowed. Use GET only"})
    }
    
}

