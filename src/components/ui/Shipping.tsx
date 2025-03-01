import { MdLocalShipping, MdHeadset, MdPayment } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

function Shipping() {
  return (
    <>
          {/* Section 8 SHIPPING */}
      <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 dark:bg-secondary py-5 md:py-10">
        <div className="grid sm:grid-cols-4 w-full">
          <div className="flex justify-center w-full mb-5">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdLocalShipping className="text-4xl mx-auto" />
              <span className="block text-xl font-semibold">Free Shipping</span>
              <span className="block text-xs font-thin">Free shipping for order above 5000 IDR</span>
            </div>
          </div>
          <div className="flex justify-center w-full mb-5">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <FaSackDollar className="text-4xl mx-auto" />
              <span className="block text-xl font-semibold">Money Guarantee</span>
              <span className="block text-xs font-thin">Within 30 days for an exchange</span>
            </div>
          </div>
          <div className="flex justify-center w-full mb-5">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdHeadset className="text-4xl mx-auto" />
              <span className="block text-xl font-semibold">Online Support</span>
              <span className="block text-xs font-thin">24 hours a day, 7 days a week</span>
            </div>
          </div>
          <div className="flex justify-center w-full mb-5">
            <div className="bg-white dark:bg-secondary text-center w-full">
              <MdPayment className="text-4xl mx-auto" />
              <span className="block text-xl font-semibold">Flexible Payment</span>
              <span className="block text-xs font-thin">Pay with multiple credit cards</span>
            </div>
          </div>
        </div>
      </div>
      {/* End Section 8 */}
    </>
  )
}

export default Shipping