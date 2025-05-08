"use client"; // for image swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import TopBar from "@/components/navigation/topBar";
import { clientsLogoImages, parallax } from "@/data/homePage";
import swiperImg1 from "@/assets/images/home/1.jpg";
import swiperImg2 from "@/assets/images/home/2.jpg";
import swiperImg3 from "@/assets/images/home/3.jpg";

const HomePage = () => {
  return (
    <div>
      <TopBar isHomePage={true} />

      {/* Main picture */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          className="relative h-screen"
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
        >
          {[swiperImg1, swiperImg2, swiperImg3].map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imgSrc}
                alt="Be Shine Fabric Wallpaper"
                fill
                sizes="(max-width: 1024px) 300vw, 200vw" // to ensure clear images
                className="object-cover"
                placeholder="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="h-[80vh] flex justify-center items-center px-4">
        <div className="max-w-[40rem] text-4xl text-center">
          Be Shine Textile Inc. – Canada’s premier leader of customized
          wallcoverings, offering ideas and inspiration to transform your space.
        </div>
      </div>

      {/* Parallax Section, all images should be 16:9 */}
      {parallax.map((item, index) => {
        return (
          <div
            className="h-[80vh] bg-fixed bg-cover flex text-secondary-text"
            style={{
              backgroundImage: "url('" + item.imageUrl + "')",
              justifyContent: item.align === "left" ? "flex-start" : "flex-end",
            }}
            key={index}
          >
            <div
              className="h-full flex flex-col justify-center items-center px-4"
              style={
                item.align === "left"
                  ? {
                      background:
                        "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                    }
                  : {
                      background:
                        "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                    }
              }
            >
              <div className="text-4xl lg:text-5xl max-w-[35rem] text-center mb-[2rem]">
                {item.title}
              </div>
              <div className="text-center max-w-[35rem]">{item.content}</div>
            </div>
          </div>
        );
      })}

      {/* Video */}
      <div className="py-12">
        <div className="mx-auto relative w-[70%] aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dnfP6uEyJ6A?si=gfflCuFc3dy5nmb4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Our Clients */}
      <div className="py-12 flex flex-col justify-center items-center">
        <div className="text-4xl mb-4">OUR CLIENTS</div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {clientsLogoImages.map((src, index) => (
              <div
                key={index}
                className="w-24 h-24 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Client ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
