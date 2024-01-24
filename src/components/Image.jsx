import todo from "../assets/Todo.jpg";

import React from 'react'

function Image() {
  return (
<header className="flex flex-col items-center justify-start">
  <img className="overflow-y-scroll  mt-4 mb-4 w-14 h-14 filter drop-shadow-sm" src={todo} alt="TODO Image" />
  <h1 className="font-condensed font-bold text-3xl tracking-wider uppercase text-orange-900 bg-clip-text">ToDO's</h1>
</header>

    
  )
}



export default Image
