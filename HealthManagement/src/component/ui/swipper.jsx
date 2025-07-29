import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Simple Badge component replacement
const Badge = ({ children, variant, className }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border ${className}`}>
    {children}
  </div>
);

// Simple SparklesIcon replacement
const SparklesIcon = ({ className }) => (
  <svg 
    className={className} 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    position: relative;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    color: white;
    z-index: 2;
  }

  .image-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

  .image-description {
    font-size: 14px;
    line-height: 1.4;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

  .size-full {
    width: 100%;
    height: 100%;
  }

  .rounded-3xl {
    border-radius: 1.5rem;
  }

  .rounded-xl {
    border-radius: 0.75rem;
  }

  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  .max-w-4xl {
    max-width: 56rem;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .border-black\/5 {
    border-color: rgba(0, 0, 0, 0.05);
  }

  .bg-neutral-800\/5 {
    background-color: rgba(38, 38, 38, 0.05);
  }

  .shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .tracking-tight {
    letter-spacing: -0.025em;
  }

  .opacity-85 {
    opacity: 0.85;
  }
  `;

  return (
    <section className="w-full space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="text-4xl opacity-85 font-bold tracking-tight">
                  Wellness Journey
                </h3>
                <p>Understanding What You're Going Through</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl relative">
                      <img
                        src={image.src}
                        className="size-full rounded-xl object-cover"
                        alt={image.alt}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400/cccccc/666666?text=Image+Not+Found';
                        }}
                      />
                      <div className="image-overlay">
                        <div className="image-title">{image.title}</div>
                        <div className="image-description">{image.description}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};