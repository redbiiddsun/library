import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Navbar from './components/navbar'
import styles from "@/styles/components/grting.module.css";
import { Outfit } from 'next/font/google';
import Head from 'next/head';

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  //const [data, setData] = useState(1 + 7) // init value
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
    {/* //Mai create for u dont delete */}
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${outfit.className}`}>

    <Navbar />
    <header className={`${styles.greeting} ${outfit.className}`}>
          <span className={styles.grtname}>Hello, John K.</span>
          <br />
          <span className={styles.date}>Sunday, 2 June 2023 | 12:12 </span>
        </header>
        <div className={styles.smallone}></div>
        <div className={styles.smalltw}></div>
        <div className={styles.smallthr}></div>
        <div className={styles.bigbox}></div>
    </main>
    </>
  )
}
