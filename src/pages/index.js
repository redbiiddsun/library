import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data,setData] = useState(1+7) // init value
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data}
      <button onClick={()=>setData((e)=>e-1)}>Minus</button>
      <button onClick={()=>setData((e)=>e+1)}>Plus</button>
    </main>
  )
}
