import React, { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import menImage from "@/assets/men.jpeg"
import jumbosImage from "@/assets/jumbos.png"
import womenImage from "@/assets/women.png"
import kidImage from "@/assets/kid.jpg"
import coupleImage from "@/assets/couple.jpeg"
import burgundyImage from "@/assets/burgundy.jpg"
import casualImage from "@/assets/casual.jpg"
import blazerImage from "@/assets/blazer.jpg"
import jeansImage from "@/assets/jeans.jpg"


const App: React.FC = () => {
  useEffect(() => {
    // Fungsi untuk mengupdate class dark berdasarkan preferensi sistem
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    // Deteksi dark mode saat pertama kali load
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.classList.toggle("dark", mediaQuery.matches);

    // Dengarkan perubahan preferensi sistem
    mediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {/* end of navbar */}
      {/* section jumbotron */}
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
      {/* end section jumbotron */}

      {/* section 2 */}
      
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
            <div style={{ backgroundImage: `url(${menImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${womenImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${kidImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${coupleImage})` }} className="bg-cover bg-no-repeat w-80 h-[380px] mx-auto rounded-3xl"></div>
            </div>
          </div>
        </div>

      {/* end section 2 */}
      
      {/* Section 3 */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">
              New Sale for Women
          </h1>                
        </div>
      </div>

      <div className="flex justify-center items-center bg-stone-300">
      <div className="grid sm:grid-cols-4 mx-auto gap-6">
        {/* card 1 */}

        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={burgundyImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        </div>

        {/* end card 1 */}
        {/* card 2 */}

        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={casualImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        </div>

        {/* end card 2 */}
        {/* card 3 */}

        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={blazerImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        </div>

        {/* end card 3 */}
        {/* card 4 */}

        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={jeansImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        </div>

        {/* end card 4 */}

      </div>
      </div>

    </>
  );
};

export default App;
