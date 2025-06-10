import React from 'react'


function Stripe({val}) {
 const {url,number}=val
  return (
    <div className='w-[16.66%]  py-4 px-5 border-t-1 border-b-1 border-r-1 flex items-center justify-between gap-2 mt-10 '>
        <span>
            <img src={url} alt="" />
        </span>
        <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe