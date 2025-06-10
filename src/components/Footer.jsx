import React from 'react'




function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl py-30 mx-auto flex gap-34'>
            <div className='basis-1/2'>
            <h1 className='text-[11rem] font-semibold leading-none tracking-tight '>Refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-25'>
            <div>
                <h4 className='mb-10 text-xl'>Socials</h4>
                {["instagram","twitter (x?)","linckedIN"].map((elem,index)=><a key={index} className='block capitalize mb-3 text-zinc-600' href='#'>{elem}</a>)}
            </div>
            <div>
                <h4 className='mb-10 text-xl'>Sitemao</h4>
                {["home","work","career","context"].map((elem,index)=><a key={index} className='block capitalize mb-3 text-zinc-600' href='#'>{elem}</a>)}
            </div>
            <div>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, itaque.</h3>
                <img className='mt-14' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer