"use client"

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";

function imgslide() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      };
      const interval = setInterval(autoplay, 2000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={img1} className='object-cover h-full w-full' alt='Image1' />
        </div>
        <div className="embla__slide">
          <img src={img2} className='object-cover h-full w-full' alt='Image2' />
        </div>
        <div className="embla__slide">
          <img src={img3} className='object-cover h-full w-full' alt='Image2' />
        </div>
      </div>
    </div>
  );
}

export default imgslide;