import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-3 rounded-xl ${width} flex flex-col justify-between hover:${hover}`}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>One heading </h3>
            <FaArrowRight/>
        </div>
        <h1 className='text-3xl font-semibold mt-10'>whatever heading</h1>
      </div>
      <div className='down w-full mt-60 '>
        {
          start===true && (
            <><h1 className='text-7xl font-medium tracking-tight leading-none '>Start project</h1>
            <button className='rounded-full px-4 py-2  border-1 border-zinc-400 mt-5'>contact us</button></>
          )
        }
        {para && (
          <p className='text-sm text-zinc-500 font-medium mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        )}
      </div>
    </div>
  )
}

export default Card