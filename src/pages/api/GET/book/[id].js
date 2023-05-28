import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../../lib/DBconnection"

export default function getฺBookById(req, res){

// GET Member with MemberID 
    const getMethod = () => {
        connection.query(`SELECT books.book_id,books.book_title,books.ISBN,books.page,books.language_id,books.author_id,books.publisher_id,books.publication_year,books.bookcategory_id, bookgenres.bookgenres_id, bookgenres.genres_id FROM books
        INNER JOIN bookgenres ON books.book_id = bookgenres.book_id WHERE books.book_id = ?`, [req.query.id],
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

