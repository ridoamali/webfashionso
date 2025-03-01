import nc1 from "@/assets/nc1.jpg";
import nc2 from "@/assets/nc2.jpg";
import nc3 from "@/assets/nc3.jpg";
import nc4 from "@/assets/nc4.jpg";

function Collection() {
  return (
    <>
          {/* section 7 */}
          
          <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pt-10 pb-5">
            <div className="text-black font-[Nunito]">
              <h1 className="text-3xl font-extrabold">New Collection</h1>                
            </div>
          </div>
          {/* Ukuran gambar 320x380px | tambahkan teks di paling depan layer gambar| ubah gambar | Ubah dari grid menjadi flex grow*/}
          <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pb-20">
              <div className="grid grid-cols-3 md:flex md:mx-10 mx-5 gap-2">
                <div className="flex justify-center col-span-2 ">
                <div style={{ backgroundImage: `url(${nc1})` }} className="bg-cover md:bg-center bg-no-repeat w-80 h-52 md:size-72 md:mx-auto rounded-xl shadow-sm"></div>
                </div>
                <div className="flex justify-center">
                <div style={{ backgroundImage: `url(${nc2})` }} className="bg-cover md:bg-center bg-no-repeat w-80 h-52 md:size-72 md:mx-auto rounded-xl shadow-sm"></div>
                </div>
                <div className="flex justify-center">
                <div style={{ backgroundImage: `url(${nc3})` }} className="bg-cover md:bg-center bg-no-repeat w-80 h-52 md:size-72 md:mx-auto rounded-xl shadow-sm"></div>
                </div>
                <div className="flex justify-center col-span-2">
                <div style={{ backgroundImage: `url(${nc4})` }} className="bg-cover md:bg-center bg-no-repeat w-80 h-52 md:size-72 md:mx-auto rounded-xl shadow-sm"></div>
                </div>
              </div>
            </div>
    
          {/* end section 7 */}
    </>
  )
}

export default Collection