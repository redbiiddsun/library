import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function insertBookGenres(req, res) {

  const postMethod = () => {
    const { bookID, genresID } = req.body;

    connection.query(`INSERT INTO bookgenres (book_id,genres_id) VALUES (?, ?)`,
      [bookID, genresID],
      (err, results, fields) => {
        if (err) {
          console.log("Error while inserting", err);
          return res.status(400).send(err);
        }
        return res.status(201).json({ message: "New bookgenres successfuly created!", checkoutID: results.insertId })
      })
  }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
  }

}