import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl py-20 mx-auto flex gap-3'>
            <Card width={"basis-1/3"} start={false} para={true}></Card>
            <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-600"}></Card>
        </div>
    </div>
  )
}

export default Cards