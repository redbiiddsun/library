import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"


export default function insertPayment(req, res) {

  const postMethod = () => {
    const { checkoutID, staffID, totalAmount } = req.body;

    connection.query(`INSERT INTO payments (payment_id, checkout_id, staff_id, payment_datetime, TotalAmount) VALUES (NULL, ?, ?, CURRENT_TIMESTAMP, ?)`,
      [checkoutID, staffID, totalAmount],
      (err, results, fields) => {
        if (err) {
          console.log("Error while inserting", err);
          return res.status(400).send(err);
        }
        return res.status(201).json({ message: "New Payment successfuly inserted!"})
      })
  }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
  }

}

