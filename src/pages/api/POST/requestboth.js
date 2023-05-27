import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function insertRequestBoth(req, res) {

    let requestID = 0;

    const postMethod = async () => {
        const { memberID, title, language, author, publisher } = req.body;

        await connection.query(`INSERT INTO requestbooks (request_id,member_id,requestbook_created)VALUES (NULL, ?, current_timestamp())`,
            [memberID],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting", err);
                    return res.status(400).send(err);
                } else {

                    requestID = results.insertId

                    connection.query(`INSERT INTO requestdetail (request_id, request_title, language_id, author_id, publisher_id, request_status)
                        VALUES (?, ?, ?, ?, ?, 'Pending');`,
                        [requestID, title, language, author, publisher],
                        (err, results, fields) => {
                            if (err) {
                                console.log("Error while inserting", err);
                                return res.status(400).send(err);
                            }
                            return res.status(201).json({ message: `${title} have been added to requestlist` })
                        })
                }
            })
    }

    if (req.method === 'POST') {
        postMethod();
    } else {
        return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
    }

}
