import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function updateMember(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

    const postMethod = () => {
      const {member_id, firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country} = req.body;
      

    //   `INSERT INTO member (member_fname, member_mname, 
    //     member_lname, member_personalID, member_DOB, member_phone, member_email, 
    //     member_addresses_1, member_addresses_2, member_city, member_postcode, 
    //     member_country)VALUES (NULL, current_timestamp(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

      connection.query(`UPDATE member SET member_fname = ?, member_mname=?, member_lname=?, 
      member_personalID=?, member_DOB=?, member_phone=?, member_email=?, member_addresses_1=?, member_addresses_2=?, member_city=?, member_postcode=?,
      member_country=? WHERE member_id =?`,
        [firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country, member_id],
        (err, results, fields) =>{
          if(err){
            console.log("Error while updating", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "Member successfuly updated!", memberID: member_id})
      })
    }

  if (req.method === 'PATCH') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use PATCH only"})
  }

}

