import React from 'react'
import styles from "@/styles/components/searchbox.module.css"


export default function Searchbox() {
  return (
    <div className={styles.searchbox}>
              
              <input className={styles.search} type="search" placeholder="Search..."></input>
              </div>
  )
}
