import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "@/lib/DBconnection";
export default function getBorrowStat(req, res) {

    const getMethod = () => {
        connection.query(`SELECT b.book_id, b.book_title, l.language, CONCAT(a.author_first_name," " ,a.author_last_name) AS Author, p.publisher, BorrowT AS BorrowingStatistic FROM (SELECT book_id, COUNT(book_id) AS BorrowT FROM checkoutsdetail GROUP BY book_id) AS t, books b, authors a, language l, publishers p WHERE b.book_id = t.book_id AND b.language_id = l.language_id AND b.author_id = a.author_id AND p.publisher_id = b.publisher_id`,
            (err, results, fields) => {

                if (results.length != 0 && !err) {
                    return res.status(200).json(results);
                } else {
                    return res.status(400).json({ error: "Invalid ID" });
                }
            })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({ message: "Method Not Allowed. Use GET only" })
    }

}

