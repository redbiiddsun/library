import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cpayment.module.css";
import Link from 'next/link'
const outfit = Outfit({ subsets: ["latin"] });

function CPaymentPage() {
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
        <span className={styles.currentmem}>Payment</span>
        <div className={styles.cmcontainer}> 
        
         <div className={styles.inputContainer}>
                <label htmlFor ="checkout-id">Member ID :</label>
                <input type = "text" id = "checkout-id" placeholder="Checkout ID" ></input>
                </div>
        <div className={styles.inputContainer}>
                <label htmlFor ="member-id">Current Date :</label>
                <input type = "text" id = "member-id" placeholder="Member ID" ></input>
                </div>
        <div className={styles.ssbox}>
               <button type="submit" form="member">Search</button>
            </div>
        </div>
            
        <div className={styles.bigtext}>
            <span>Book List</span>
            </div>
        <div className={styles.searchbox}>    
            <input className={styles.search} type="search" placeholder="Search..."></input>
        </div>

        <div className={styles.addbbox}>
          <button type="submit" form="member">Add</button>
        </div>

        <div className={styles.bigbox}>
            <div className={styles.htext}>
                <span>Borrow Book List</span>
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

export default CPaymentPage;



