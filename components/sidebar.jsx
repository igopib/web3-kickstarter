import React, {useState} from 'react'
import Link from 'next/link'

import { logo, sun} from "../assets"
import { navlinks } from "../constants"

const Icon = ({styles, name, imgUrl, isActive, disabled, handleClick}) => {
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-centre items-centre ${!disabled && 'cursor-pointer'} ${styles}`}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo"
      className='w-1/2 h-1/2'/>
    ) : (
      <img src={imgUrl} alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
    )}
  </div>
}
export default function SideBar(){
    const [isActive, setIsActive] = useState("dashboard")
  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-red" imgUrl={logo}/>
      </Link>

      <h1>Test</h1>
    </div>
  )
}
