"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { TOP_BAR_HEIGHT } from "@/config/constant";

const parallax = [
  {
    title: "WHO WE ARE",
    image: "/image/home/who-we-are.jpg",
    content:
      "Be Shine Textile Inc. is a premium leader of custom wallcoverings, offering tailored solutions that transform spaces with style and creativity. We cater to both commercial and residential clients, bringing their unique visions to life through our expertise in artistic design and professional installation.",
    align: "left",
  },
  {
    title: "WHAT WE DO",
    image: "/image/home/what-we-do.jpg",
    content:
      "Our dedicated team ensures that every project is executed with the highest level of craftsmanship and efficiency, making us the trusted choice for wallcovering needs in both corporate and cozy environments. Whether you're looking to enhance a commercial space or add a personal touch to your home, Be Shine Textile Inc. delivers perfect results every time.",
    align: "right",
  },
  {
    title: "BASED IN TORONTO",
    image: "/image/home/based-in-toronto.jpg",
    content:
      "Be Shine Textile, based in the Greater Toronto Area (GTA), Ontario, are actively involved in various projects throughout the region, offering both inspiration and professional installation services. Explore our sample collection at our showroom in Markham and we can bring your vision to life.",
    align: "left",
  },
  {
    title: "QUALITY ASSURANCE",
    image: "/image/home/quality-assurance.jpg",
    content:
      "We take pride in our commitment to quality. With our own textile and printing factory, we ensure that all products are in perfect condition. Understanding that product quality is crucial to our clients, we closely monitor every stage of production and printing. This meticulous process guarantees that all our wallcoverings are flawless, vibrant, and environmentally friendly.",
    align: "right",
  },
];

const images = [
  "/image/banner/3.png",
  "/image/banner/4.png",
  "/image/banner/5.png",
  "/image/banner/6.png",
  "/image/banner/9.png",
  "/image/banner/10.png",
  "/image/banner/11.png",
];

const clients = [
  "/image/clients/1.jpg",
  "/image/clients/2.png",
  "/image/clients/3.png",
  "/image/clients/4.png",
  "/image/clients/6.png",
  "/image/clients/7.png",
  "/image/clients/8.png",
  "/image/clients/10.png",
];

const HomePage = () => {
  return (
    <div>
      {/* First picture */}
      <div
        className="bg-cover flex justify-center items-center text-custom-small-title text-center"
        style={{
          backgroundImage: "url('/image/home/feather.jpg')",
          height: `calc(100vh - ${TOP_BAR_HEIGHT})`,
        }}
      >
        Transforming Spaces with Artistic Precision and Perfect Wallcovering
      </div>

      {/* Content */}
      <div className="h-[80vh] bg-white flex justify-center items-center text-custom-small-title text-center text-black">
        <div className="max-w-[40rem]">
          Art • Haute Couture • Hotels • Restaurants • Offices • Home • Condo •
          Eccentric • Fun
        </div>
      </div>

      {/* Image swiper, all images must be 1920 x 900 */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={900}
              className="animate-enlargeSmallIn4s"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="h-[80vh] bg-white flex justify-center items-center text-custom-small-title text-center text-black">
        <div className="max-w-[40rem]">
          Be Shine Textile Inc. – Canada’s premier leader of customized
          wallcoverings, offering ideas and inspiration to transform your space.
        </div>
      </div>

      {/* Parallax Section */}
      {parallax.map((item, index) => {
        return (
          <div
            className="h-[80vh] bg-fixed bg-cover flex"
            style={{
              backgroundImage: "url('" + item.image + "')",
              justifyContent: item.align === "left" ? "flex-start" : "flex-end",
            }}
            key={index}
          >
            <div
              className="h-full w-[35rem] flex flex-col justify-center"
              style={{
                background:
                  item.align === "left"
                    ? "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"
                    : "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
                alignItems: item.align === "left" ? "flex-end" : "flex-start",
              }}
            >
              <div className="text-custom-medium-title w-[26rem] text-center mb-[2rem]">
                {item.title}
              </div>
              <div className="w-[26rem] text-center">{item.content}</div>
            </div>
          </div>
        );
      })}

      {/* Our Clients */}
      <div className="h-[80vh] flex flex-col bg-white justify-center items-center">
        <div className="text-custom-small-title text-black">OUR CLIENTS</div>
        <div className="container mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {clients.map((src, index) => (
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
