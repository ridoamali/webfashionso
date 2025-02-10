import menImage from "@/assets/men.jpeg";
import womenImage from "@/assets/women.png";
import kidImage from "@/assets/kid.jpg";
import coupleImage from "@/assets/couple.jpeg";

const ShopByCategory: React.FC = () => {
  return (
    <>
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pb-5">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">Shop By Category</h1>
        </div>
      </div>

      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="grid sm:grid-cols-4 mx-auto gap-6">
          {[menImage, womenImage, kidImage, coupleImage].map((image, index) => (
            <div
              key={index}
              className="flex justify-center animate-fadeIn duration-700"
            >
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl shadow-xl 
                transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
