import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import styles from "@/styles/components/cbookrequest.module.css";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
import { UseDialog } from "../components/dialog";
import { useState, useEffect } from "react";

const outfit = Outfit({ subsets: ["latin"] });


function CbookRequestPage() {

  const [language, setLanguage] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publisher, setPublisher] = useState([]);

  //Init Dialog
  const { handleClickToOpen, DialogComponent } = UseDialog();

  // store a dialog value
  const [resTitle, setresTitle] = useState("");
  const [resContent, setresContent] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful }
  } = useForm();

  useEffect(() => {

    getLanguage()
    getAuthor()
    getPublisher()

  }, [])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        title: '', memberID: '', language: ''
      });
    }
  }, [formState, reset]);

  async function getLanguage() {
    await axios({
      method: 'get',
      url: '/api/GET/language',
    })
      .then(function (response) {
        setLanguage(response.data)
        console.log(response.data)
      });
  }

  async function getAuthor() {
    await axios({
      method: 'get',
      url: '/api/GET/authors/',
    })
      .then(function (response) {
        setAuthor(response.data)
        console.log(response.data)
      });
  }

  async function getPublisher() {
    await axios({
      method: 'get',
      url: '/api/GET/publisher',
    })
      .then(function (response) {
        setPublisher(response.data)
        console.log(response.data)
      });
  }

  const onSubmit = async (data) => {
    console.log(data)

    await axios.post('/api/POST/requestboth', data).then(function (response) {

      setresTitle("Notification")
      setresContent(`${response.data.message}`)

      handleClickToOpen()

    }).catch(function (error) {
      console.log(error);

      setresTitle("Error")
      setresContent(`Please Contact Admin`)

      handleClickToOpen()
    });
    reset({ ...data })
  };


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
        <span className={styles.currentmem}>Request Book</span>

        <div className={styles.cmcontainer}>
          <div className={styles.formgroupbigger}>
            <form id="requestbook" className={styles.formgroup} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputContainer}>
                <label htmlFor="member-id">Member ID :</label>
                <input type="text" id="member-id" placeholder="Member ID"  {...register("memberID")} required></input>
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="book-title">Book :</label>
                <input type="text" id="book-title" placeholder="Book Title" {...register("title")} required></input>
              </div>

              <div className={styles.dropdownContainer}>
                <label htmlFor="language-id">Language ID :</label>
                <select name="language-id" id="language-id" {...register("language")} required>
                  <option value="">Please Select</option>
                  {
                    language.map((result) => (<option value={result.language_id}>{result.language}</option>))
                  }
                </select>
              </div>

              <div className={styles.dropdownContainer}>
                <label htmlFor="author-id">Author ID :</label>
                <select name="author-id" id="author-id" {...register("author")} required>
                  <option value="">Please Select</option>
                  {
                    author.map((result) => (<option value={result.author_id}>{result.author_first_name}</option>))
                  }
                </select>
              </div>

              <div className={styles.dropdownContainer}>
                <label htmlFor="publisher-id">Publisher ID :</label>
                <select name="publisher-id" id="publisher-id" {...register("publisher")} required>
                  <option value="">Please Select</option>
                  {
                    publisher.map((result) => (<option value={result.publisher_id}>{result.publisher}</option>))
                  }
                </select>
              </div>
            </form>
          </div>

        </div>

        <div className={styles.backbox}>
          <Link href="/libraryms/cbook"><span>Back</span></Link>
        </div>
        <div className={styles.confirmbox}>
          <button type="submit" form="requestbook">Confirm</button>
        </div>
        <DialogComponent title={resTitle} content={resContent} />
      </main>
    </>
  );
}

export default CbookRequestPage;


