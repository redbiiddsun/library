import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

export default function getBook(req, res){
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME 
    });
    
  

    const getMethod = () => {

      connection.query("SELECT b.book_id, b.book_title,b.ISBN, b.page, l.language, a.author_first_name, p.publisher, b.publication_year, c.bookcategory FROM books b, language l, authors a, publishers p, bookcategory c WHERE b.language_id = l.language_id AND b.author_id = a.author_id AND b.publisher_id = p.publisher_id AND b.bookcategory_id = c.bookcategory_id",
      (err, results, fields) =>{

        if(err){
          console.log(err)
          return res.status(400).send({Error: err});
        }
          return res.status(200).json(results)
        })
    }
  
  if (req.method === 'GET') {
    getMethod();
  } else {
    return res.status(405).json({message: "Method Not Allowed. Use GET only"})
  }
}

