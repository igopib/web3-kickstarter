import React, {useState} from 'react'
import Link from 'next/link'

import { logo, sun} from "../assets"
import { navlinks } from "../constants"

const Icon = ({styles, name, imgUrl, isActive, disabled, handleClick}) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-centre items-centre ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo"
      className='w-1/2 h-1/2'/>
    ) : (
      <img src={imgUrl} alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
    )}
  </div>
)
export default function SideBar(){
    const [isActive, setIsActive] = useState("dashboard")
  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh] bg-white'>
      <Link href="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo}/>
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded=[20px] w-[76px] py-4 mt-12'>
        <div className="flex flex-col justify-center items-center gap-3">
            {navlinks.map((Link) => (
              <Icon 
              key={Link.name}
              {...link}
              isActive={isActive}
              handleClick={() =>  {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigator(link.link);
                }
              }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
