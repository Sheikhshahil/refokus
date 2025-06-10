import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-1 border-zinc-600 '>
        <div className="nleft flex items-center">
            <img className='mr-20' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className="links flex gap-16">
            {["Home","Work","Career" ,"","News"].map((elem,index)=>{
                return elem.length===0 ? <span key={index} className='w-[1.5px] h-7 bg-zinc-500'></span> : <a key={index} className='flex items-center gap-1.5 font-["Satoshi regular"]' href="#">{index===1 ? <span style={{boxShadow:"0 0 0.65em #00FF19"}}  className='inline-block w-2 h-2 bg-green-500 rounded shadow-lg'></span> : ""} {elem}</a>
            })}
        </div>
        </div>
        <Button></Button>
    </div>
  )
}

export default Navbar