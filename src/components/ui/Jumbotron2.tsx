import jumbos5 from "@/assets/jumbos5.png";

function Jumbotron2() {
  return (
    <>

      {/* section 5 */}
      {/* edit gambarnya */}
      <div className="min-h-fit min-w-fit flex justify-center items-center bg-stone-300 py-5">
          <div className="grid sm:grid-cols-2 mx-auto md:items-center">
            <div className="text-center m-5">
              <div className="text-black font-[Nunito] md:mx-10 md:py-10 md:text-xl">
                <h1 className="text-4xl font-extrabold py-5">
                  Styles that are suited for you
                </h1>
                Professional, sleek, and simple discover the perfect formal wear for your workday
                </div>
                <button className="btn dark:btn-neutral btn-md md:btn-lg dark:text-stone-300 rounded-full my-5">Shop Workwear</button>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${jumbos5})` }} className="bg-center bg-cover bg-no-repeat size-[24rem]"></div>
            </div>
          </div>
        </div>
      {/* end section 5 */}

    </>
  )
}

export default Jumbotron2