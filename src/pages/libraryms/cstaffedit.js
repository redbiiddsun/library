import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cmemberedit.module.css";
import Link from 'next/link'

const outfit = Outfit({ subsets: ["latin"] });

function CstaffEditPage() {
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
       
        <span className={styles.currentmem}>Edit Staff</span>
          
        <div className={styles.cmcontainer}>
           <Searchbox/> 
            <div className={styles.searchbox}></div>

            <div className={styles.formgroupbigger}>
              <form className={styles.formgroup}>

                <div className={styles.inputContainer}>
                <label htmlFor ="first-name">First Name</label>
                <input type = "text" id = "first-name" placeholder="First Name"/>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="mid-name">Mid Name</label>
                <input type = "text" id = "mid-name" placeholder="Mid Name" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="last-name">Last Name</label>
                <input type = "text" id = "last-name" placeholder="Last Name" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="birthday">Birthday</label>
                <input type = "text" id = "birthday" placeholder="DD/MM/YYYY" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="idno">ID Number</label>
                <input type = "text" id = "idno" placeholder="13 Identification Numbers" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="phone">Phone</label>
                <input type = "text" id = "phone" placeholder="xxx-xxx-xxxx" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="email">Email</label>
                <input type = "text" id = "email" placeholder="xxxxx@email.com" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="address1">Address 1</label>
                <input type = "text" id = "address1" placeholder="" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="address2">Address 2</label>
                <input type = "text" id = "address2" placeholder="" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="country">Country</label>
                <input type = "text" id = "country" placeholder="" ></input>
                </div> 
                <div className={styles.inputContainer}>
                <label htmlFor ="bankaccname">Bank Account Name</label>
                <input type = "text" id = "bankaccname" placeholder="First-Mid-Last Name" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="bankaccno">Bank Account Number</label>
                <input type = "text" id = "bankaccno" placeholder="xxx-xxx-xxxx" ></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="zip">ZIP</label>
                <input type = "text" id = "zip" placeholder="" ></input>
                </div>
                </form>

            </div>
            
        </div>



        <div className={styles.backbox}>
        <Link href="/libraryms/cstaff"><span>Back</span></Link>
        </div>
        <div className={styles.confirmbox}>
          <button type="submit" form="member">Confirm</button>
        </div>
      </main>
    </>
  );
}

export default CstaffEditPage;


