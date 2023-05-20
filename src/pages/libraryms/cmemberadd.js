import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/cmemberadd.module.css";
import Link from 'next/link'
const outfit = Outfit({ subsets: ["latin"] });

function CmemberAddPage() {
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
        <span className={styles.currentmem}>Add Member</span>

        <div className={styles.cmcontainer}>
            <div className={styles.h2}>Blank</div>

            <div className="form-group">
                <input type = "text" id = "first-name" placeholder="First Name" ></input>
                <label htmlFor ="first-name">First Name</label>
            </div>

        </div>







        <div className={styles.backbox}>
        <Link href="/libraryms/cmember"><span>Back</span></Link>
        </div>
        <div className={styles.confirmbox}>
        <Link href="/libraryms/cmember"><span>Confirmed</span></Link>
        </div>
      </main>
    </>
  );
}

export default CmemberAddPage;


