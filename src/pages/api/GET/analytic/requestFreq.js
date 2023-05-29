
import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "@/lib/DBconnection";
export default function getBorrowStat(req, res) {

    const getMethod = () => {
        connection.query(`SELECT rd.request_title, l.language, CONCAT(a.author_first_name," " ,a.author_last_name) 
        as Authors, p.publisher, COUNT(request_title) AS PopularRequest
         FROM requestdetail rd, requestbooks rb, language l, authors a, 
         publishers p WHERE rd.request_id = rb.request_id AND rd.language_id = l.language_id 
         AND rd.author_id = a.author_id AND rd.publisher_id = p.publisher_id 
         GROUP BY rd.request_title, rd.author_id, rd.publisher_id ORDER BY PopularRequest DESC;`,
            (err, results, fields) => {

                if (results.length != 0 && !err) {
                    return res.status(200).json(results);
                } else {
                    return res.status(204).json({ error: "Invalid ID" });
                }
            })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({ message: "Method Not Allowed. Use GET only" })
    }

}

