import React from 'react'
import Button from './Button'


function Product({val,mover, index}) {
  return (
    <div className='w-full py-5 h-[23rem]  text-black '>
        <div onMouseEnter={()=>{ mover(index)}} className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
            <h1 className='text-6xl capitalize font-medium font-[Satoshi Regular]'>{val.title}</h1>
        <div className="dets w-1/3 mt-6">
            <p className='mb-14  font-[Satoshi Regular]'>{val.description}</p>
            <div className='flex gap-2.5'>
                {val.live && <Button></Button>}
                {val.case && <Button title='case study'></Button>}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Product