import React, { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import { MdLocalShipping, MdHeadset, MdPayment } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
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

      {/* end section 2 */}
      
      {/* Section 3 */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">
              New Sale for Women
          </h1>                
        </div>
      </div>
      {/* EDIT SEMUA UKURAN PIXEL GAMBAR MENJADI SAMA DAN PAS DI TENGAH */}
      {/* Semua card */}
      <div className="flex justify-center items-center bg-stone-300">
      <div className="grid sm:grid-cols-4 mx-auto gap-6">

        {/* card 1 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={burgundyImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={casualImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={blazerImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={jeansImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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
      {/* End Section 3 */}

      {/* Section 4 */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">
              New Sale for Men
          </h1>                
        </div>
      </div>
      {/* EDIT SEMUA UKURAN PIXEL GAMBAR MENJADI SAMA DAN PAS DI TENGAH CARI GAMBAR BARU */}
      {/* Semua card */}
      <div className="flex justify-center items-center bg-stone-300">
      <div className="grid sm:grid-cols-4 mx-auto gap-6">

        {/* card 1 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={burgundyImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={casualImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={blazerImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={jeansImage}
            alt="Shoes" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
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
      {/* End Section 4 */}

      {/* section 5 */}
      {/* edit gambarnya */}
        <div className="min-h-fit min-w-fit flex justify-center items-center bg-stone-300">
          <div className="grid sm:grid-cols-2 mx-auto">
            <div className="text-center">
              <div className="text-black font-[Nunito]">
                <h1 className="text-4xl font-extrabold">
                  Styles that are suited for you
                </h1>
                Professional, sleek, and simple discover the perfect formal wear for your workday
                </div>
                <button className="btn dark:btn-neutral btn-sm rounded-xl">Shop workwear</button>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${jumbosImage})` }} className="bg-center bg-cover bg-no-repeat size-[24rem]"></div>
            </div>
          </div>
        </div>
      {/* end section 5 */}

      {/* section 6 */}
      
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">Our Best Sellers</h1>                
        </div>
      </div>
      {/* Ukuran gambar 320x380px | tambahkan teks di paling depan layer gambar*/}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="grid sm:grid-cols-4 mx-auto gap-6">
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${menImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${womenImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${kidImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${coupleImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
          </div>
        </div>

      {/* end section 6 */}

      {/* section 7 */}
      
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">New Collection</h1>                
        </div>
      </div>
      {/* Ukuran gambar 320x380px | tambahkan teks di paling depan layer gambar| ubah gambar*/}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 mx-5 gap-2">
            <div className="flex justify-center col-span-2 ">
            <div style={{ backgroundImage: `url(${menImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${womenImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center">
            <div style={{ backgroundImage: `url(${kidImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
            <div className="flex justify-center col-span-2">
            <div style={{ backgroundImage: `url(${coupleImage})` }} className="bg-cover bg-no-repeat w-80 h-52 md:h-[380px] md:mx-auto rounded-xl shadow-sm"></div>
            </div>
          </div>
        </div>

      {/* end section 7 */}

      {/* Section 8 */}

      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                DIISI SHIPPING
            </h1>                
          </div>
      </div>
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="grid sm:grid-cols-4 mx-auto gap-6">
            <div className="flex justify-center">
              <div className="bg-white dark:bg-secondary mx-auto text-center">
                <MdLocalShipping className="text-6xl mx-auto" />
                <span className="inline-block">Free Shipping</span>
                <span className="inline-block">Free shipping for order above 5000 IDR</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-secondary mx-auto text-center">
                <FaSackDollar className="text-6xl mx-auto" />
                <span className="inline-block">Money Guarantee</span>
                <span className="inline-block">Within 30 days for an exchange</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-secondary mx-auto text-center">
                <MdHeadset className="text-6xl mx-auto" />
                <span className="inline-block">Online Support</span>
                <span className="inline-block">24 hours a day, 7 days a week</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-secondary mx-auto text-center">
                <MdPayment className="text-6xl mx-auto" />
                <span className="inline-block">Flexible Payment</span>
                <span className="inline-block">Pay with multiple credit cards</span>
              </div>
            </div>
          </div>
      </div>

      {/* End Section 8 */}

      {/* Section 9 Slider | Edit Gambar dan jumlah */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                More To Shop
            </h1>                
          </div>
      </div>

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
      </div>

      {/* End Section 9 Slider */}

      {/* Section 10 Top review */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                Top Reviews
            </h1>                
          </div>
      </div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
      {/* END Section 10 Top review */}

      {/* Footer jadikan components */}
      <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      
    </>
  );
};

export default App;
