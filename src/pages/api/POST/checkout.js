import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"


export default function insertCheckout(req, res) {

  const postMethod = () => {

    let checkoutID = 0;

    const { bookList, memberID, amount, staffID, currentdate, returndate } = req.body;

    connection.query(`INSERT INTO checkouts (checkout_id, member_id, checkout_amount, created_checkout, staff_id) VALUES (NULL, ?, ?, current_timestamp(), ?)`,
      [memberID, amount, staffID],
      (err, results, fields) => {
        if (err) {
          console.log("Error while inserting", err);
          return res.status(400).send(err);
        } else {

          checkoutID = results.insertId

          for (let i = 0; i < bookList.length; i++) {
            //console.log(bookList[i].book_id);
            connection.query(`INSERT INTO checkoutsdetail (checkout_id, book_id, checkout_date, return_duration_date, is_returned) VALUES (?, ?, ?, ?, 0)`,
              [checkoutID, bookList[i].book_id, currentdate, returndate],
              (err, results, fields) => {
                if (err) {
                  console.log("Error while inserting", err);
                  return res.status(400).send(err);
                }
                return res.status(201).json({ message: "New checkouts successfuly created!", checkoutID: checkoutID })
              })
          }
        }

      })
  }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
  }

}
