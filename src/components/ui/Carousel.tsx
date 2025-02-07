import React, { useState } from "react";

interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}

interface CarouselProps {
  images?: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className="relative">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md sm:max-w-screen-lg space-x-4 p-4">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div 
            key={index} 
            
            className={`carousel-item ${index === currentIndex ? "block" : ""}`}
            >
              <div className="card bg-base-100 w-60 shadow-xl">
                <figure className="w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-60 object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title">
                    {image.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{image.description}</p>
                  <div className="card-actions justify-end">
                    {image.tags.map((tag, idx) => (
                      <div key={idx} className="badge badge-outline">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No images available</p>
        )}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button onClick={prevSlide} className="btn btn-circle">❮</button>
      <button onClick={nextSlide} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};


export default Carousel;
