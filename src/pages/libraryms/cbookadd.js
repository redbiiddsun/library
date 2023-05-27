import Head from "next/head";
import { Outfit } from "next/font/google";
import Navbar from "../components/navbar";
import Searchbox from "../components/searchbox";
import styles from "@/styles/components/cbookadd.module.css";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
import { UseDialog } from "../components/dialog";
import { useState, useEffect } from "react";


const outfit = Outfit({ subsets: ["latin"] });

function CbookAddPage() {

  const [language, setLanguage] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [bookcategory, setBookcategory] = useState([]);
  const [genres, setGenres] = useState([]);

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
    getCategory()
    getGenres()

  }, [])

  useEffect(() => {
      if (formState.isSubmitSuccessful) {
        reset({
          book_title: '', isbn: '', page: '',
          language: '', publisher: '', publication: '',
          bookcategory: '', genres: '', author: '',
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

  async function getCategory() {
    await axios({
      method: 'get',
      url: '/api/GET/bookcategory',
    })
      .then(function (response) {
        setBookcategory(response.data)
        console.log(response.data)
      });
  }

  async function getGenres() {
    await axios({
      method: 'get',
      url: '/api/GET/genres',
    })
      .then(function (response) {
        setGenres(response.data)
        console.log(response.data)
      });
  }

  const onSubmit = async (data) => {
    console.log(data)

    await axios.post('/api/POST/bookcomplete', data).then(function (response) {

      setresTitle(`${response.data.message}`)
      setresContent(`BookID is ${response.data.bookID}`)

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

        <span className={styles.currentmem}>Add Book</span>

        <div className={styles.cmcontainer}>
          <Searchbox />
          <div className={styles.searchbox}></div>

          <div className={styles.formgroupbigger}>
            <form id='book' className={styles.formgroup} onSubmit={handleSubmit(onSubmit)}>

              <div className={styles.inputContainer}>
                <label htmlFor="book-title">Book Title</label>
                <input type="text" id="book-title" placeholder="Book Title" {...register("book_title")} required/>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="isbn">ISBN</label>
                <input type="text" id="isbn" placeholder="ISBN" {...register("isbn")} ></input>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="pagenum">Page</label>
                <input type="text" id="pagenum" placeholder="Page" {...register("page")} required></input>
              </div>
              <div className={styles.dropdownContainer}>
                <label htmlFor="language-id">Language ID</label>
                <select name="author-id" id="author-id" {...register("language")} required>
                  <option value="">Please Select</option>
                  {
                    language.map((result) => (<option value={result.language_id}>{result.language}</option>))
                  }
                </select>
              </div>
              <div className={styles.dropdownContainer}>
                <label htmlFor="author-id">Author ID</label>
                <select name="author-id" id="author-id" {...register("author")} required>
                  <option value="">Please Select</option>
                  {
                    author.map((result) => (<option value={result.author_id}>{result.author_first_name}</option>))
                  }
                </select>
              </div>
              <div className={styles.dropdownContainer}>
                <label htmlFor="publisher-id">Publisher ID</label>
                <select name="publisher-id" id="publisher-id" {...register("publisher")} required>
                  <option value="">Please Select</option>
                  {
                    publisher.map((result) => (<option value={result.publisher_id}>{result.publisher}</option>))
                  }
                </select>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="publication-year">Publication Year</label>
                <input type="text" id="publication-year" placeholder="Publication Year" {...register("publication")}></input>
              </div>
              <div className={styles.dropdownContainer}>
                <label htmlFor="bookcategory-id">Book Category ID</label>
                <select name="bookcategory-id" id="bookcategory-id" {...register("bookcategory")} required>
                  <option value="">Please Select</option>
                  {
                    bookcategory.map((result) => (<option value={result.bookcategory_id}>{result.bookcategory}</option>))
                  }
                </select>
              </div>
              <div className={styles.dropdownContainer}>
                <label htmlFor="bookgenre">Book Genre</label>
                <select name="bookgenre" id="bookgenre" {...register("genres")} required>
                  <option value="">Please Select</option>
                  {
                    genres.map((result) => (<option value={result.genres_id}>{result.genres}</option>))
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
          <button type="submit" form="book">Confirm</button>
        </div>
        <DialogComponent title={resTitle} content={resContent} />
      </main>
    </>
  );
}

export default CbookAddPage;


