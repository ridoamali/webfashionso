import React, { useRef } from "react";
import { Star } from "lucide-react";

const Reviews: React.FC = () => {
  const slidesRef = useRef<HTMLDivElement[]>([]);

  const scrollToSlide = (index: number) => {
    if (slidesRef.current[index]) {
      slidesRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

    // Data review dengan rating (1-5 bintang)
    const reviews = [
        { text: "Pelayanan sangat memuaskan dan cepat!", rating: 5 },
        { text: "Produk berkualitas, tapi pengiriman agak lama.", rating: 4 },
        { text: "Cukup bagus, tapi ada yang perlu diperbaiki.", rating: 3 },
        { text: "Kurang puas dengan layanan pelanggan.", rating: 2 },
      ];

  return (
    <div className="w-full bg-stone-300 dark:bg-gray-800">
      {/* Carousel Container */}
      <div className="carousel w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {reviews.map((review, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="carousel-item w-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-6 text-center"
          >
            <h1 className="text-lg font-bold max-w-2xl">{review.text}</h1>

            {/* Icon Bintang Review */}
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex w-full justify-center gap-2 py-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className="btn btn-xs"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
