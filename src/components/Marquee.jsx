import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div>
        {imagesurls.map((url)=>(<img src={url} className=''/>))}
    </div>
  )
}

export default Marquee