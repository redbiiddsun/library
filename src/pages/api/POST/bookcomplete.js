import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function insertBook(req, res) {
    const postMethod = () => {
        const { book_title, isbn, page, language, author, publisher, publication, bookcategory, genres } = req.body;
        
        let BookID = 0;

        connection.query(`INSERT INTO books (book_id, book_title, ISBN, page, language_id, author_id, publisher_id, 
        publication_year, bookcategory_id, book_created) VALUES (NULL, ?, ?,
         ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
            [book_title, isbn, page, language, author, publisher, publication, bookcategory],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting", err);
                    return res.status(400).send(err);
                } else {
                    BookID = results.insertId
                    connection.query(`INSERT INTO bookgenres (book_id,genres_id) VALUES (?, ?)`,
                        [BookID, genres],
                        (err, results, fields) => {
                            if (err) {
                                console.log("Error while inserting", err);
                                return res.status(400).send(err);
                            }
                            return res.status(201).json({ message: "New book successfuly added!", bookID: BookID })
                        })
                }
                //return res.status(201).json({ message: "New book successfuly created!", bookID: results.insertId })
            })
    }

    if (req.method === 'POST') {
        postMethod();
    } else {
        return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
    }

}

