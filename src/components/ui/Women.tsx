import burgundyImage from "@/assets/burgundy.jpg";
import casualImage from "@/assets/casual.jpg";
import blazerImage from "@/assets/blazer.jpg";
import jeansImage from "@/assets/jeans.jpg";

function Women() {
  return (
    <>
          {/* Section 3 */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pt-10 pb-5 md:pb-10">
        <div className="text-black font-[Nunito]">
          <h1 className="text-3xl font-extrabold">
              New Sale for Women
          </h1>                
        </div>
      </div>
      {/* EDIT SEMUA UKURAN PIXEL GAMBAR MENJADI SAMA DAN PAS DI TENGAH */}
      {/* Semua card */}
      <div className="flex justify-center items-center bg-stone-300 md:pb-10">
      <div className="grid sm:grid-cols-4 mx-auto gap-6">

        {/* card 1 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={burgundyImage}
            alt="Coat" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1600 EGP
            <div className="badge badge-secondary">20% OFF</div>
          </h2>
          <p>Burgundy Trench Coat</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Coat</div>
          </div>
        </div>
        </div>

        {/* end card 1 */}
        {/* card 2 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={casualImage}
            alt="Jacket" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1200 EGP
            <div className="badge badge-secondary">10% OFF</div>
          </h2>
          <p>Hooded Casual Jacket</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Jacket</div>
          </div>
        </div>
        </div>

        {/* end card 2 */}
        {/* card 3 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={blazerImage}
            alt="Blazer" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1400 EGP
            <div className="badge badge-secondary">15% OFF</div>
          </h2>
          <p>Black Elegant Blazer</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Blazer</div>
          </div>
        </div>
        </div>

        {/* end card 3 */}
        {/* card 4 */}

        <div className="card bg-base-100 w-60 mx-auto shadow-xl">
        <figure className="w-full">
          <img
            src={jeansImage}
            alt="Jeans" 
            className="size-60 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">
            1600 EGP
            <div className="badge badge-secondary">14% OFF</div>
          </h2>
          <p>Light Jeans Shirt</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Jeans</div>
          </div>
        </div>
        </div>

        {/* end card 4 */}

      </div>
      </div>
      {/* End Section 3 */}

    </>
  )
}

export default Women