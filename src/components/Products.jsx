import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'


function Products() {
    var products=[
        {title:"Arqitel", description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true, case:false},
        {title:"TTR", description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true, case:false},
        {title:"YIR 2022", description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true, case:true},
        {title:"Yahoo!", description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true, case:true},
        {title:"Rainfall", description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",live:true, case:true}

    ];
    const [pos, setpos] = useState(0)
    const mover=(val)=>(
      setpos(val*23)
    )
  return (
    <div className='bg-zinc-900 relative'>
        {products.map((elem,index)=>(<Product index={index} mover={mover} key={index} val={elem}></Product>))}
        <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div initial={{y: pos}} animate={{y:pos+"rem"}} className='w-[32rem] h-[23rem] absolute left-[43%] -translate-x-[50%] translate-y-[0rem] bg-amber-500 overflow-hidden '>
            <motion.div animate={{y:-pos+"rem"}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className='window w-full h-full bg-sky-100'>
               <video autoPlay muted className="w-full h-full object-cover"><source src="src\assets\arqitel-D3jJRwFT.mp4" type="video/mp4" /> </video>
            </motion.div>
            <motion.div animate={{y:-pos+"rem"}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className='window w-full h-full bg-sky-200'>
              <video autoPlay muted className="w-full h-full object-cover"><source src="src\assets\ttr-CUQdDHBj.mp4" type="video/mp4" /> </video>
            </motion.div>
            <motion.div animate={{y:-pos+"rem"}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className='window w-full h-full bg-sky-300'>
              <video autoPlay muted className="w-full h-full object-cover"><source src="src\assets\yir-BzJiRbqx.mp4" type="video/mp4" /> </video>
            </motion.div>
            <motion.div animate={{y:-pos+"rem"}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className='window w-full h-full bg-sky-400'>
              <video autoPlay muted className="w-full h-full object-cover"><source src="src\assets\yahoo-D7WzLbum.mp4" type="video/mp4" /> </video>
            </motion.div>
            <motion.div animate={{y:-pos+"rem"}} transition={{ease: [0.76,0,0.24,1], duration:0.6}} className='window w-full h-full bg-sky-500'>
              <video autoPlay muted className="w-full h-full object-cover"><source src="src\assets\rainfall-BZC7HG1T.mp4" type="video/mp4" /> </video>
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products