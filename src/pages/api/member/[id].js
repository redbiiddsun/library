import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getMemberById(req, res){

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
    // GET Member with MemberID 
    const getMethod = () => {
        connection.query("SELECT * FROM member WHERE member_id = ?", [req.query.id],
        (err, results, fields) =>{ 

            if(results.length != 0 && !err){
                return res.status(200).json(results);
            }else{
                return res.status(400).json({error: "Invalid ID"});
            }
        })
    }
    //POST UPDATE member with ID
    const postMethod = () => {
        const {firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country} = req.body;

        connection.query(`UPDATE member SET member_fname = ?, member_mname = ?, member_lname = ?, member_personalID = ?, member_DOB = ?, member_phone = ?, member_email = ?, member_addresses_1 = ?, member_addresses_2 = ?, member_city = ?, member_postcode = ?, member_country = ? WHERE member_id = ?`,
         [firstname, midname, lastname, NationID, DOB, phone, email, addresses1, addresses2, city, postcode, country, req.query.id],
        (err, results, fields) =>{
            if(err){
                console.log(err)
                return res.status(400).send();
            }
            return res.status(200).json({message: "Update member successfuly!"})
        })
    }

    if (req.method === 'POST') {
        postMethod();
    } else {
        getMethod();
    }
    
}

