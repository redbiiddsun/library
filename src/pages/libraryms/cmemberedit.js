import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cmemberedit.module.css";
import styless from "@/styles/components/searchbox.module.css"
import Link from 'next/link'
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UseDialog } from "../components/dialog";

const outfit = Outfit({ subsets: ["latin"] });

function CmemberEditPage() {

  const [search, setSearch] = useState()
  const [resData, setResData] = useState([])

    //Init Dialog
    const { handleClickToOpen, DialogComponent } = UseDialog();

    // store a dialog value
    const [resTitle, setresTitle] = useState("");
    const [resContent, setresContent] = useState("");

  function convertToFormattedDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  async function onSearch(e) {
    e.preventDefault()
    await axios({ method: 'get', url: `/api/GET/member/${search}`, }).then(function (response) {
      setResData(response.data[0])
      console.log(response.data[0])
    }).catch(function (error) {
      console.log(error);

    });
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { isSubmitSuccessful }
  } = useForm(
    {
      values: {
        firstname: resData.member_fname,
        midname: resData.member_mname,
        lastname: resData.member_lname,
        DOB: convertToFormattedDate(resData.member_DOB),
        NationID: resData.member_personalID,
        phone: resData.member_phone,
        email: resData.member_email,
        addresses1: resData.member_addresses_1,
        addresses2: resData.member_addresses_2,
        city: resData.member_city,
        postcode: resData.member_postcode,
        country: resData.member_country
      }
    }
  );

  function onSubmit(data) {
    //console.log(data)
    const temp = { member_id: resData.member_id, ...data }
    console.log(temp)
    axios({
      method: 'patch',
      url: '/api/PATCH/member/',
      data: temp
    })
      .then(function (response) {

        setresTitle(response.data.message)
        setresContent(`MemberID: ${response.data.memberID} is updated`)

        handleClickToOpen()

      }).catch(function (error) {
        console.log(error);

        setresTitle("Error")
      setresContent(`Please Contact Admin`)

      handleClickToOpen()

      });
      setResData([])

  }


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
        <span className={styles.currentmem}>Edit Member</span>
        <div className={styles.cmcontainer}>
          <form onSubmit={onSearch}>
            <Searchbox onChange={setSearch} />
            <div className={styles.ssbox}>
              <button type="submit">Search</button>
            </div>
          </form>
          <div className={styles.searchbox}></div>

          <div className={styles.formgroupbigger}>
            <form id="updatemember" className={styles.formgroup} onSubmit={handleSubmit(onSubmit)}>

              <div className={styles.inputContainer}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="First Name" {...register("firstname", { required: true })} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="mid-name">Mid Name</label>
                <input type="text" id="mid-name" placeholder="Mid Name" {...register("midname")}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" {...register("lastname", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id="birthday" placeholder="DD/MM/YYYY" {...register("DOB", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="idno">ID Number</label>
                <input type="text" id="idno" placeholder="13 Identification Numbers" {...register("NationID", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="xxx-xxx-xxxx" {...register("phone", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="xxxxx@email.com" {...register("email", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="address1">Address 1</label>
                <input type="text" id="address1" placeholder="" {...register("addresses1", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="address2">Address 2</label>
                <input type="text" id="address2" placeholder="" {...register("addresses2")}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="" {...register("city", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="zip">ZIP</label>
                <input type="text" id="zip" placeholder="" {...register("postcode", { required: true })}></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="" {...register("country", { required: true })}></input>
              </div>
            </form>

          </div>

        </div>
        <div className={styles.backbox}>
          <Link href="/libraryms/cmember"><span>Back</span></Link>
        </div>
        <div className={styles.confirmbox}>
          <button type="submit" form="updatemember">Confirm</button>
        </div>
        <DialogComponent title={resTitle} content={resContent} />
      </main>
    </>
  );
}

export default CmemberEditPage;


