import React from 'react'
import styles from "@/styles/components/navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

import image1 from "../../../public/image/LMS__3_-removebg-preview 1.png"
import image2 from "../../../public/image/Books.png"
import image3 from "../../../public/image/HouseLine.png"
import image4 from "../../../public/image/UserCircleGear.png"
import image5 from "../../../public/image/UsersThree.png"
import image6 from "../../../public/image/CurrencyCircleDollar.png"



export default function Navbar() {
  return (
    <div className={styles.box}>
      <div className={styles.Logo}>
        <Image src={image1} alt="" width={70} height={70}/>
        <span>Library Management System</span>
      </div>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/">
              <Image src={image3} alt="" width={40} height={40}/>
              <span> Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/libraryms/cmember">
              <Image src={image5} alt="" width={40} height={40}/>
              <span> Members</span>
            </Link>
          </li>
          <li>
            <Link href="/staff">
              <Image src={image4} alt="" width={40} height={40}/>
              <span> Staff</span>
            </Link>
          </li>
          <li>
            <Link href="/book">
              <Image src={image2} alt="" width={40} height={40}/>
              <span> Book</span>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              <Image src={image6} alt="" width={40} height={40}/>
              <span> Payment</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
