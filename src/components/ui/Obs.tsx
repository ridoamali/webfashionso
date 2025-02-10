import obs1 from "@/assets/obs1.png";
import obs2 from "@/assets/obs2.png";
import obs3 from "@/assets/obs3.png";
import obs4 from "@/assets/obs4.png";

function Obs() {
  return (
    <>
          {/* section 6 */}
      
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pb-5">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">Our Best Sellers</h1>                
        </div>
      </div>
      {/* Ukuran gambar 320x380px | tambahkan teks di paling depan layer gambar*/}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="grid sm:grid-cols-4 mx-auto gap-6">
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${obs1})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${obs2})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${obs3})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${obs4})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
          </div>
        </div>

      {/* end section 6 */}
    </>
  )
}

export default Obs