import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function updateBook(req, res) {
    const postMethod = () => {
        const { bookID, book_title, isbn, page, language, author, publisher, publication, bookcategory, genres, bookgenresID } = req.body;
        
        let BookID = 0;

        connection.query(`UPDATE books SET book_title=?, ISBN=?, page=?, language_id=?, author_id=?, publisher_id=?, publication_year=?, bookcategory_id=? WHERE book_id=?`,
            [book_title, isbn, page, language, author, publisher, publication, bookcategory, bookID],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting", err);
                    return res.status(400).send(err);
                } else {
                    connection.query(`UPDATE bookgenres SET genres_id=? WHERE bookgenres_id=?`,
                        [genres, bookgenresID],
                        (err, results, fields) => {
                            if (err) {
                                console.log("Error while inserting", err);
                                return res.status(400).send(err);
                            }
                            return res.status(201).json({ message: "Book have updated", RowAffected: results.affectedRows })
                        })
                }
            })
    }

    if (req.method === 'PATCH') {
        postMethod();
    } else {
        return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
    }

}

