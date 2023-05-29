import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"
import connection from "@/lib/DBconnection";
export default function getBorrowMemberStat(req, res){

    const getMethod = () => {
        connection.query(`SELECT m.member_id, CONCAT(m.member_fname, " ",m.member_lname) AS MemberName, t.statisticsborrowbooks FROM (SELECT c.member_id,SUM(c.checkout_amount)AS statisticsborrowbooks FROM checkouts c GROUP BY c.member_id) t, member m WHERE t.member_id = m.member_id`,
        (err, results, fields) =>{ 

            if(results.length != 0 && !err){
                return res.status(200).json(results);
            }else{
                return res.status(204).json({error: "Invalid ID"});
            }
        })
    }


    if (req.method === 'GET') {
        getMethod();
    } else {
        return res.status(405).json({message: "Method Not Allowed. Use GET only"})
    }
    
}

