import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Button({title="get started"}) {
  return (
    <div className='max-w-35 px-2 py-2 bg-white text-black  rounded-full flex items-center border-1 border-zince-200 justify-between gap-6 '>
        <span className='font-regular text-sm'>{title}</span> 
        <MdOutlineSubdirectoryArrowRight />
     </div>
  )
}

export default Button