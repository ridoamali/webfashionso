import nsfm1 from "@/assets/nsfm1.jpg";
import nsfm2 from "@/assets/nsfm2.jpg";
import nsfm3 from "@/assets/nsfm3.jpg";
import nsfm4 from "@/assets/nsfm4.png";

function Men() {
  return (
    <>
          {/* Section 4 */}
          <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pt-10 pb-5 md:pb-10">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">
              New Sale for Men
          </h1>                
        </div>
      </div>
      {/* EDIT SEMUA UKURAN PIXEL GAMBAR MENJADI SAMA DAN PAS DI TENGAH CARI GAMBAR BARU */}
      {/* Semua card */}
      <div className="flex justify-center items-center bg-stone-300 md:pb-10">
      <div className="grid sm:grid-cols-4 mx-auto gap-6">

        {/* card 1 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={nsfm1}
            alt="Casual" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            2000 EGP
            <div className="badge badge-secondary">15% OFF</div>
          </h2>
          <p>Casual Caffe Shirt</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Casual</div>
          </div>
        </div>
        </div>

        {/* end card 1 */}
        {/* card 2 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={nsfm2}
            alt="Blazer" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1500 EGP
            <div className="badge badge-secondary">10% OFF</div>
          </h2>
          <p>Black Elegant Blazer</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Blazer</div>
          </div>
        </div>
        </div>

        {/* end card 2 */}
        {/* card 3 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={nsfm3}
            alt="sweatshirt" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1300 EGP
            <div className="badge badge-secondary">12% OFF</div>
          </h2>
          <p>Hooded Blue Sweatshirt</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Sweatshirt</div>
          </div>
        </div>
        </div>

        {/* end card 3 */}
        {/* card 4 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={nsfm4}
            alt="Jacket" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1200 EGP
            <div className="badge badge-secondary">10% OFF</div>
          </h2>
          <p>Casual Black Jacket</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Jacket</div>
          </div>
        </div>
        </div>

        {/* end card 4 */}

      </div>
      </div>
      {/* End Section 4 */}
    </>
  )
}

export default Men