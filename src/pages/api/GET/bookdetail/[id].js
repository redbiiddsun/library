import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../../lib/DBconnection"

export default function getฺBookById(req, res){

// GET Member with MemberID 
    const getMethod = () => {
        connection.query(`SELECT b.book_id, b.book_title,b.ISBN, b.page, l.language, CONCAT(a.author_first_name, " ", a.author_last_name), p.publisher, b.publication_year, c.bookcategory FROM books b, language l, authors a, publishers p, bookcategory c WHERE b.language_id = l.language_id AND b.author_id = a.author_id AND b.publisher_id = p.publisher_id AND b.bookcategory_id = c.bookcategory_id AND book_id= ?`, [req.query.id],
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

