import { MdLocalShipping, MdHeadset, MdPayment } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

function Shipping() {
  return (
    <>
          {/* Section 8 SHIPPING */}
          <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
          <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                DIISI SHIPPING
            </h1>                
          </div>
      </div>
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300">
        <div className="grid sm:grid-cols-4 w-full">
          <div className="flex justify-center w-full">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdLocalShipping className="text-6xl mx-auto" />
              <span className="block">Free Shipping</span>
              <span className="block">Free shipping for order above 5000 IDR</span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <FaSackDollar className="text-6xl mx-auto" />
              <span className="block">Money Guarantee</span>
              <span className="block">Within 30 days for an exchange</span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdHeadset className="text-6xl mx-auto" />
              <span className="block">Online Support</span>
              <span className="block">24 hours a day, 7 days a week</span>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdPayment className="text-6xl mx-auto" />
              <span className="block">Flexible Payment</span>
              <span className="block">Pay with multiple credit cards</span>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 8 */}
    </>
  )
}

export default Shipping