import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import styles from "@/styles/components/grting.module.css";
import { Outfit } from 'next/font/google';
import Head from 'next/head';
import TableComponent from "../pages/components/tableAddDaily";
import TableComponentRequestBook from './components/tablebookrequestdaily';
import TableComponentBorrowStat from './components/tableBorrowStat';
import TableComponentBorrowStatMember from './components/tableborrowStatMember';
import TableComponentReqFreq from './components/tableReqFreq';
import { useEffect, useState } from 'react';
import axios from 'axios';

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  //const [data, setData] = useState(1 + 7) // init value

  const [addedBook, setMember] = useState();
  const [requestBookDaily, setrequestBookDaily] = useState();
  const [BorrowStat, setBorrowStat] = useState();
  const [borrowStatMember, setborrowStatMember] = useState();
  const [reqFreq, setreqFreq] = useState();

  const [bookNum, setBookNum] = useState();
  const [staffNum, setStaffNum] = useState();
  const [memberNum, setMemberNum] = useState();

  const countBook = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/totalbook',
    })
      .then(function (response) {
        //console.log(response.data[0].bookNum)
        setBookNum(response.data[0].bookNum)
      });
  }

  const countStaff = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/totalstaff',
    })
      .then(function (response) {
        //console.log(response.data[0].staffNum)
        setStaffNum(response.data[0].staffNum)
      });
  }

  const countMember = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/totalmember',
    })
      .then(function (response) {
        //console.log(response.data[0].staffNum)
        setMemberNum(response.data[0].memberNum)
      });
  }



  const addedBookData = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/bookdaily',
    })
      .then(function (response) {
        setMember(response.data)
      });
  }

  const requestBookFreq = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/requestFreq',
    })
      .then(function (response) {
        setreqFreq(response.data)
      });
  }

  const requestBookDailyData = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/bookrequestdaily',
    })
      .then(function (response) {
        setrequestBookDaily(response.data)
      });
  }
  const borrowStatData = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/borrowstat',
    })
      .then(function (response) {
        setBorrowStat(response.data)
      });
  }

  const borrowStatMemberData = async () => {

    axios({
      method: 'get',
      url: '/api/GET/analytic/borrowstatMember',
    })
      .then(function (response) {
        setborrowStatMember(response.data)
      });
  }

  useEffect(() => {

    addedBookData()
    requestBookDailyData()
    borrowStatData()
    borrowStatMemberData()
    countBook()
    countStaff()
    countMember()
    requestBookFreq()


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
      {/* //Mai create for u dont delete */}
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${outfit.className}`}>

        <Navbar />
        <header className={`${styles.greeting} ${outfit.className}`}>
          <span className={styles.grtname}>Hello, John K.</span>
          <br />
          <span className={styles.date}>Sunday, 2 June 2023 | 12:12 </span>
        </header>
        <div className={styles.smallone}>
          <span>Total Member :</span>
          <div className={styles.statisscore}>
            <span>{memberNum}</span>
          </div>
        </div>
        <div className={styles.smalltw}>
          <span>Total Staff :</span>
          <div className={styles.statisscore}>
            <span>{staffNum}</span>
          </div>
        </div>
        <div className={styles.smallthr}>
          <span>Total Book :</span>
          <div className={styles.statisscore}>
            <span>{bookNum}</span>
          </div>
        </div>
        
        <div className={styles.s0textbox}>
          <span>Recent Book Added</span>
        </div>
        <div className={styles.bigbox}>
          <TableComponent data={addedBook} />
        </div>

        <div className={styles.s1textbox}>
          <span>Recent Book Request</span>
        </div>
        <div className={styles.bigboxs1}>
          <TableComponentRequestBook data={requestBookDaily} />
        </div>

        <div className={styles.s2textbox}>
          <span>Borrow Statistics (Book)</span>
        </div>
        <div className={styles.bigboxs2}>
          <TableComponentBorrowStat data={BorrowStat} />
        </div>

        <div className={styles.s3textbox}>
          <span>Borrow Statistics (Member)</span>
        </div>
        <div className={styles.bigboxs3}>
          <TableComponentBorrowStatMember data={borrowStatMember} />
        </div>

        <div className={styles.s4textbox}>
          <span>Popular Book Requested</span>
        </div>
        <div className={styles.bigboxs4}>
          <TableComponentReqFreq data={reqFreq} />
        </div>

          {/* <div className={styles.circles}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
      </main>
    </>
  )
}
