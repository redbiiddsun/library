import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cbookborrow.module.css";
import Link from 'next/link'
const outfit = Outfit({ subsets: ["latin"] });
import { useForm } from "react-hook-form";
import axios from "axios";
import { UseDialog } from "../components/dialog";
import { useState, useEffect, use } from "react";
import TableComponentBookBorrow from "../components/tableBookBorrow";
function CbookBorrowPage() {

   //Init Dialog
   const { handleClickToOpen, DialogComponent } = UseDialog();

   // store a dialog value
   const [resTitle, setresTitle] = useState("");
   const [resContent, setresContent] = useState("");
   
   const [bookID, setBookID] = useState()
   const [memberID, setmemberID] = useState();

   const [resData, setResData] = useState([]);
  const [countData, setCounData] = useState(0)
   const {
     register,
     handleSubmit,
     reset,
     formState,
     formState: { isSubmitSuccessful }
   } = useForm();

   const onSubmit = async (data) => {
    console.log(data)
    if(countData > 0){

    }else{
      
    }
    // await axios.post('http://localhost:3000/api/POST/staff', data).then(function (response) {

    //   setresTitle(response.data.message)
    //   setresContent(`StaffID is ${response.data.StaffID}`)

    //   handleClickToOpen()


    // }).catch(function (error) {
    //   console.log(error);

    //   setresTitle("Error")
    //   setresContent(`Please Contact Admin`)

    //   handleClickToOpen()
    // });
    // reset({ ...data })
  };

  async function onSearch(e) {
    e.preventDefault()
    console.log(bookID)
    await axios({ method: 'get', url: `/api/GET/bookdetail/${bookID}`, }).then(function (response) {
      const data = response.data[0]
      setResData((prv) => ([
        ...prv, data
      ]))
      setCounData(e => e+1)
      //console.log(response.data[0])

    }).catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log(resData)
    console.log(countData)
  }, [resData]);

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
        <Navbar />
        <span className={styles.currentmem}>Borrow Book</span>
        <div className={styles.cmcontainer}>
          <form id="borrow" className={styles.formgroup} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              <label htmlFor="member-id">Member ID :</label>
              <input type="text" id="member-id" placeholder="Member ID" {...register("memberID")} required></input>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="staff-id">Staff ID :</label>
              <input type="text" id="staff-id" placeholder="staff ID" {...register("staffID")} required></input>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="current-date">Current Date :</label>
              <input type="date" id="current-date" placeholder="DD/MM/YYYY" {...register("currentdate")} required></input>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="return-date">Return date :</label>
              <input type="date" id="return-date" placeholder="DD/MM/YYYY" {...register("returndate")} required></input>
            </div>
          </form>
        </div>

        <div className={styles.bigtext}>
          <span>Book List</span>
        </div>
        <form id='paymentsearch' onSubmit={onSearch}>
        <div className={styles.searchbox}>
          <input className={styles.search} type="search" placeholder="Search..." onChange={ (e) => setBookID(e.target.value)}></input>
        </div>

        <div className={styles.addbbox}>
          <button type="submit" form="paymentsearch">Add</button>
        </div>
        </form>

        <div className={styles.htext}>
          <span>Borrow Book List</span>
        </div>
        <div className={styles.bigbox}>
          <TableComponentBookBorrow data={resData}/>
        </div>


        <div className={styles.backbox}>
          <Link href="/libraryms/cbook"><span>Back</span></Link>
        </div>

        <div className={styles.confirmbox}>
          <button type="submit" form="borrow">Confirm</button>
        </div>
        <DialogComponent title={resTitle} content={resContent} />
      </main>
    </>
  );
}

export default CbookBorrowPage;


