import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/cbook.module.css";
import Link from 'next/link'
import TableComponent from "../components/tableMember";
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableComponentBook from "../components/tableBook";

const outfit = Outfit({ subsets: ["latin"] });

function CbookPage() {
  const [book, setBook] = useState();

  const bookData = async () => {

    axios({
      method: 'get',
      url: '/api/GET/book',
    })
      .then(function (response) {
        setBook(response.data)
      });
    }

  useEffect(() => {

    bookData()

  }, [])

  return (
    <>

      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
          rel="stylesheet"
        />
        <title>Library Management System</title>
      </Head>
      <main>
        <Navbar/>
        <span className={styles.currentmem}>Current Book</span>
        <div className={styles.cmcontainer}> 
        <TableComponentBook data={book}/>
        </div>
        <div className={styles.addbox}>
        <Link href="/libraryms/cbookadd"><span>add</span></Link>
        </div>
        <div className={styles.editbox}>
        <Link href="/libraryms/cbookedit"><span>edit</span></Link>
        </div>
        <div className={styles.requestbox}>
        <Link href="/libraryms/cbookrequest"><span>Request</span></Link>
        </div>
        <div className={styles.borrowbox}>
        <Link href="/libraryms/cbookborrow"><span>Borrow</span></Link>
        </div>
      </main>
    </>
  );
}

export default CbookPage;


