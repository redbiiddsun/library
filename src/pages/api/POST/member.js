import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"


export default function insertMember(req, res) {

  const postMethod = () => {
    const { firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country } = req.body;

    connection.query(`INSERT INTO member (member_id, member_created, member_fname, member_mname, 
        member_lname, member_personalID, member_DOB, member_phone, member_email, 
        member_addresses_1, member_addresses_2, member_city, member_postcode, 
        member_country)VALUES (NULL, current_timestamp(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country],
      (err, results, fields) => {
        if (err) {
          console.log("Error while inserting", err);
          return res.status(400).send(err);
        }
        return res.status(201).json({ message: "New member successfuly created!", memberID: results.insertId })
      })
  }

  if (req.method === 'POST') {
    postMethod();
  } else {
    return res.status(405).json({ message: "Method Not Allowed. Use POST only" })
  }

}

