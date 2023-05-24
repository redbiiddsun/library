import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/cmembera.module.css";
import Link from 'next/link'
const outfit = Outfit({ subsets: ["latin"] });

function CstaffPage() {
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
        <span className={styles.currentmem}>Current Staff</span>
        <div className={styles.cmcontainer}> 
        </div>
        <div className={styles.addbox}>
        <Link href="/libraryms/cstaffadd"><span>add</span></Link>
        </div>
        <div className={styles.editbox}>
        <Link href="/libraryms/cstaffedit"><span>edit</span></Link>
        </div>
      </main>
    </>
  );
}

export default CstaffPage;


