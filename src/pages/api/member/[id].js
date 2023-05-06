import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getMemberById(req, res){
    //res.status(200).json({name: req.query.id});
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'library_management_system' 
    });
    

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
    const postMethod = () => {
    //     connection.query("INSERT INTO `member` (`member_id`, `member_created`, `member_fname`, `member_mname`, `member_lname`, `member_personalID`, `member_DOB`, `member_phone`, `member_email`, `member_addresses_1`, `member_addresses_2`, `member_city`, `member_postcode`, `member_country`) VALUES (NULL, current_timestamp(), 'Chock', 'w', 'Dee', '1187888873784', '2023-05-10', '1111', 'opwdwds', 'wdawd', 'wdawdwa', 'wd', '111', 'Thailand');", [newName, user_id],
    //     (err, results, fields) =>{
    //         if(err){
    //             console.log(err)
    //             return res.status(400).send();
    //         }
    //     return res.status(200).json({message: "Name update done"})
    //   })
    }

    switch(req.method){
        case 'GET':
            getMethod();
        case 'POST':
            postMethod();
    }

    
}

