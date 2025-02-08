import React from 'react'
import jumbosImage from "@/assets/jumbos.png";

function Jumbotron() {
  return (
    <div className="min-h-fit min-w-fit flex justify-center items-center bg-stone-300">
    <div className="grid sm:grid-cols-3 mx-auto">
      <div className="text-center">
        <div className="text-black font-[Nunito]">
          Sale up to
          <h1 className="text-6xl font-extrabold">
            50%
          </h1>
          On selected items
          </div>
      </div>
      <div className="flex justify-center">
      <div style={{ backgroundImage: `url(${jumbosImage})` }} className="bg-center bg-cover bg-no-repeat size-[24rem]"></div>
      </div>
      <div className=" font-[Nunito] text-center">
        <div className="text-black text-2xl font-semibold py-2">Elegance starts here discover the beauty of local fashion</div>
        <div className="text-black text-base pb-2">Discover a curated selection like never before with our powerful searching feature now available in your area </div>
        
        <button className="btn dark:btn-neutral btn-wide rounded-full">Discover now</button>
      </div>
    </div>
  </div>
  )
}

export default Jumbotron