import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //const [data, setData] = useState(1 + 7) // init value
  return (
    //Mai create for u dont delete
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>

    <Navbar />

    </main>
  )
}
