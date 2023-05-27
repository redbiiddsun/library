import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "../../../lib/DBconnection"

export default function updateStaff(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
      });
    

    const postMethod = () => {
      const {staff_id, firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country, bankname, banknum} = req.body;
      connection.query(`UPDATE staff SET staff_fname = ?, staff_mname=?, staff_lname=?, 
      staff_personalID=?, staff_DOB=?, staff_phone=?, staff_email=?, staff_addresses_1=?, staff_addresses_2=?, staff_city=?, staff_postcode=?,
      bank_name=?, bankAcc_num=? WHERE staff_id =?`,
        [firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country, bankname, banknum, staff_id],
        (err, results, fields) =>{
          if(err){
            console.log("Error while inserting", err);
            return res.status(400).send(err);
          }
          return res.status(201).json({message: "staff successfuly updated!", memberID: member_id})
      })
    }

  if (req.method === 'PATCH') {
    postMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use PATCH only"})
  }

}