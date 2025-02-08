import menImage from "@/assets/men.jpeg";
import womenImage from "@/assets/women.png";
import kidImage from "@/assets/kid.jpg";
import coupleImage from "@/assets/couple.jpeg";

function Category() {
  return (
    <>
    <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                Shop By Category
            </h1>                
        </div>
    </div>

    <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="grid sm:grid-cols-4 mx-auto gap-6">
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${menImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl shadow-xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${womenImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl shadow-xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${kidImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl shadow-xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${coupleImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl shadow-xl"></div>
            </div>
        </div>
      </div>

    </>
    
  )
}

export default Category