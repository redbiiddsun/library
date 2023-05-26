import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/grting.module.css";

const outfit = Outfit({ subsets: ["latin"] });

function HomePage() {
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
        <header className={styles.greeting}>
          <span className={styles.grtname}>Hello, John K.</span>
          <br />
          <span className={styles.date}>Sunday, 2 June 2023 | 11:12 </span>
        </header>
        <div className={styles.smallone}></div> 
        <div className={styles.smalltw}></div>
        <div className={styles.smallthr}></div>
        <div className={styles.bigbox}></div>
      </main>
    </>
  );
}

export default HomePage;

{
  /* 
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <!---->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet">

      <!----======== CSS ======== -->
      <link rel="stylesheet" href="main.css">
      <!--Title-->
      <title>Library Management System</title>
  </head>
  <body>
      <header class="greeting">
          <span class="grtname">Hello, John K.</span>
          <br>
          <span class="date">Sunday, 2 June 2023 | 12:12 </span>
      </header>
      <div class="box">
          <div class="Logo">

              <img src="img/LMS__3_-removebg-preview 1.png" alt="">
              <span>Library Management System</span>

          </div>
      <div class="sidebar">
          <ul>
          <li><a href="index.html">
              <img src="img/HouseLine.png" alt="">
              <span>  Dashboard</span>
          </a></li>
          <li><a href="member.html">
              <img src="img/UsersThree.png" alt="">
              <span>  Members</span>
          </a></li>
          <li><a href="staff.html">
              <img src="img/UserCircleGear.png" alt="">
              <span>  Staff</span>
          </a></li>
          <li><a href="book.html">
              <img src="img/Books.png" alt="">
              <span>  Book</span>
          </a></li>
          <li><a href="payment.html">
              <img src="img/CurrencyCircleDollar.png" alt="">
              <span>  Payment</span>

          </a></li>
          </ul>
      </div>
      </div> */
}
