import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/cbookrequest.module.css";
import Link from 'next/link'
const outfit = Outfit({ subsets: ["latin"] });

function CbookRequestPage() {
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
        <span className={styles.currentmem}>Request Book</span>
        <div className={styles.cmcontainer}> 
         <div className={styles.inputContainer}>
                <label htmlFor ="member-id">Member ID :</label>
                <input type = "text" id = "member-id" placeholder="Member ID" ></input>
                </div>
        <div className={styles.inputContainer}>
                <label htmlFor ="book-title">Page :</label>
                <input type = "text" id = "book-title" placeholder="Book Title" ></input>
                </div>
        <div className={styles.dropdownContainer}>
                <label htmlFor ="language-id">Language ID :</label>
                <select name="author-id" id="author-id">
                    <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
        <div className={styles.dropdownContainer}>
                <label htmlFor ="author-id">Author ID :</label>
                <select name="author-id" id="author-id">
                    <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
        <div className={styles.dropdownContainer}>
                <label htmlFor ="publisher-id">Publisher ID :</label>
                <select name="publisher-id" id="publisher-id">
                    <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
        </div>
       










        <div className={styles.backbox}>
        <Link href="/libraryms/cbook"><span>Back</span></Link>
        </div>

        <div className={styles.confirmbox}>
          <button type="submit" form="member">Confirm</button>
        </div>
        
      </main>
    </>
  );
}

export default CbookRequestPage;


