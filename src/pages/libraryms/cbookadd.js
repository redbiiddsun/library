import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cbookadd.module.css";
import Link from 'next/link'

const outfit = Outfit({ subsets: ["latin"] });

function CbookAddPage() {
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
       
        <span className={styles.currentmem}>Add Book</span>
          
        <div className={styles.cmcontainer}>
           <Searchbox/> 
            <div className={styles.searchbox}></div>

            <div className={styles.formgroupbigger}>
              <form className={styles.formgroup}>

                <div className={styles.inputContainer}>
                <label htmlFor ="book-title">Book Title</label>
                <input type = "text" id = "book-title" placeholder="Book Title"/>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="isbn">ISBN</label>
                <input type = "text" id = "isbn" placeholder="ISBN" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="pagenum">Page</label>
                <input type = "text" id = "pagenum" placeholder="Page" ></input>
                </div>
                <div className={styles.dropdownContainer}>
                <label htmlFor ="author-id">Author ID</label>
                <select name="author-id" id="author-id">
                    <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
                <div className={styles.dropdownContainer}>
                <label htmlFor ="publisher-id">Publisher ID</label>
                <select name="publisher-id" id="publisher-id">
                <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="publication-year">Publication Year</label>
                <input type = "text" id = "publication-year" placeholder="Publication Year" ></input>
                </div>
                <div className={styles.dropdownContainer}>
                <label htmlFor ="bookcategory-id">Book Category ID</label>
                <select name="bookcategory-id" id="bookcategory-id">
                <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
                <div className={styles.dropdownContainer}>
                <label htmlFor ="bookgenre">Book Genre</label>
                <select name="bookgenre" id="bookgenre">
                <option value="">Please Select</option>
                    <option value=""></option>
                </select>
                </div>
                
                </form>

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

export default CbookAddPage;


