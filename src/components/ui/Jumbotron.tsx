import jumbosImage from "@/assets/jumbos.png";

function Jumbotron() {
  return (
    <div className="min-h-fit min-w-fit flex justify-center items-center bg-stone-300 md:px-10">
    <div className="grid sm:grid-cols-3 mx-auto md:items-center">
      <div className="text-center mt-2 md:text-left md:mx-auto">
        <div className="text-black text-xl font-[Nunito]">
          Sale up to
          <h1 className="text-6xl font-extrabold">
            50%
          </h1>
          On selected items
          </div>
      </div>
      <div className="flex justify-center">
      <div style={{ backgroundImage: `url(${jumbosImage})` }} className="bg-center bg-cover bg-no-repeat size-[24rem] md:size-[35rem]"></div>
      {/* <img src={jumbosImage} alt="jumbotron" className="bg-center bg-cover bg-no-repeat size-[24rem] md:w-full md:h-full md:z-999" /> */}
      </div>
      <div className=" font-[Nunito] text-center mb-5 md:m-10">
        <div className="text-black text-2xl md:text-3xl md:font-bold font-semibold py-2">Elegance starts here discover the beauty of local fashion</div>
        <div className="text-black text-base pb-2">Discover a curated selection like never before with our powerful searching feature now available in your area </div>
        
        <button className="btn dark:btn-neutral btn-wide rounded-full dark:text-white">Discover Now</button>
      </div>
    </div>
  </div>
  )
}

export default Jumbotron