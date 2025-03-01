import Carousel from "@/components/ui/Carousel"
import slider1 from "@/assets/slider1.jpeg";
import slider2 from "@/assets/slider2.jpg";
import slider3 from "@/assets/slider3.jpg";
import slider4 from "@/assets/slider4.jpg";
import slider5 from "@/assets/slider5.jpg";
import slider6 from "@/assets/slider6.png";

const images = [
    {
      src: slider1,
      alt: "Slider 1",
      title: "First Slide",
      description: "This is the first slider image.",
      tags: ["Feature", "Highlight"]
    },
    {
      src: slider2,
      alt: "Slider 2",
      title: "Second Slide",
      description: "This is the second slider image.",
      tags: ["New", "Trending"]
    },
    {
      src: slider3,
      alt: "Slider 3",
      title: "Third Slide",
      description: "This is the third slider image.",
      tags: ["Popular", "Recommended"]
    },
    {
      src: slider4,
      alt: "Slider 4",
      title: "Third Slide",
      description: "This is the third slider image.",
      tags: ["Popular", "Recommended"]
    },
    {
      src: slider5,
      alt: "Slider 5",
      title: "Third Slide",
      description: "This is the third slider image.",
      tags: ["Popular", "Recommended"]
    },
    {
      src: slider6,
      alt: "Slider 6",
      title: "Third Slide",
      description: "This is the third slider image.",
      tags: ["Popular", "Recommended"]
    },
  ];
  

function Slider() {
  return (
    <>
          {/* Section 9 Slider | Edit Gambar dan jumlah */}
          <div className="min-h-fit min-w-[384px] flex justify-center items-center bg-stone-300 pt-10 pb-5">
          <div className="text-black font-[Nunito]">
            <h1 className="text-3xl font-extrabold">
                More To Shop
            </h1>                
          </div>
          </div>
      {/* edit ukuran gambar 240x180 | Edit button scrollnya | kenapa harus declare 2x imagenya */}
      <div className="flex justify-center items-center min-h-fit bg-stone-300 pb-5 md:pb-10">
      <Carousel images={images} />
      </div>

      {/* End Section 9 Slider */}
    </>
  )
}

export default Slider