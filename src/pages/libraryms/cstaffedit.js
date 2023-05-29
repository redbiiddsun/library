import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cstaffedit.module.css";
import Link from 'next/link'
import styless from "@/styles/components/searchbox.module.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UseDialog } from "../components/dialog";

const outfit = Outfit({ subsets: ["latin"] });

function CstaffEditPage() {

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
    await axios({ method: 'get', url: `/api/GET/staff/${search}`, }).then(function (response) {
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
        firstname: resData.staff_fname,
        midname: resData.staff_mname,
        lastname: resData.staff_lname,
        DOB: convertToFormattedDate(resData.staff_DOB),
        NationID: resData.staff_personalID,
        phone: resData.staff_phone,
        email: resData.staff_email,
        addresses1: resData.staff_addresse_1,
        addresses2: resData.staff_addresse_2,
        city: resData.staff_city,
        postcode: resData.staff_postcode,
        country: resData.staff_country,
        bankname: resData.bank_name,
        banknum: resData.bankAcc_num
      }
    }
  );

  function onSubmit(data) {
    const temp = { staff_id: resData.staff_id, ...data }
    console.log(temp)
    axios({
      method: 'patch',
      url: '/api/PATCH/staff',
      data: temp
    })
      .then(function (response) {

        setresTitle(response.data.message)
        setresContent(`RowEffected: ${response.data.RowAffected}`)

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
        <Navbar/>
       
        <span className={styles.currentmem}>Edit Staff</span>
        <div className={styles.cmcontainer}>
          <form onSubmit={onSearch}>
           <Searchbox onChange={setSearch}/> 
           <div className={styles.ssbox}>
              <button type="submit" >Search</button>
           </div>
          </form>
            <div className={styles.formgroupbigger}>
              <form id="updatestaff" className={styles.formgroup} onSubmit={handleSubmit(onSubmit)}>              

                <div className={styles.inputContainer}>
                <label htmlFor ="first-name">First Name</label>
                <input type = "text" id = "first-name" placeholder="First Name"{...register("firstname", { required: true })} required/>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="mid-name">Mid Name</label>
                <input type = "text" id = "mid-name" placeholder="Mid Name" {...register("midname")}></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="last-name">Last Name</label>
                <input type = "text" id = "last-name" placeholder="Last Name" {...register("lastname", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="birthday">Birthday</label>
                <input type = "date" id = "birthday" placeholder="DD/MM/YYYY" {...register("DOB", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="idno">ID Number</label>
                <input type = "text" id = "idno" placeholder="13 Identification Numbers" {...register("NationID", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="phone">Phone</label>
                <input type = "text" id = "phone" placeholder="xxx-xxx-xxxx" {...register("phone", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="email">Email</label>
                <input type = "text" id = "email" placeholder="xxxxx@email.com" {...register("email", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="address1">Address 1</label>
                <input type = "text" id = "address1" placeholder="" {...register("addresses1", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="address2">Address 2</label>
                <input type = "text" id = "address2" placeholder="" {...register("addresses2")}></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="city">City</label>
                <input type = "text" id = "city" placeholder="" {...register("city", { required: true })} required></input>
                </div> 
                <div className={styles.inputContainer}>
                <label htmlFor ="country">Country</label>
                <input type = "text" id = "country" placeholder="" {...register("country", { required: true })} required></input>
                </div> 
                <div className={styles.inputContainer}>
                <label htmlFor ="bankaccname">Bank Account Name</label>
                <input type = "text" id = "bankaccname" placeholder="First-Mid-Last Name" {...register("bankname", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="bankaccno">Bank Account Number</label>
                <input type = "text" id = "bankaccno" placeholder="xxx-xxx-xxxx" {...register("banknum", { required: true })} required></input>
                </div>
                <div className={styles.inputContainer}>
                <label htmlFor ="zip">ZIP</label>
                <input type = "text" id = "zip" placeholder="" {...register("postcode", { required: true })}></input>
                </div>
                </form>

            </div>
            
        </div>



        <div className={styles.backbox}>
        <Link href="/libraryms/cstaff"><span>Back</span></Link>
        </div>
        <div className={styles.confirmbox}>
          <button type="submit" form="updatestaff">Confirm</button>
        </div>
        <DialogComponent title={resTitle} content={resContent} />
      </main>
    </>
  );
}

export default CstaffEditPage;


