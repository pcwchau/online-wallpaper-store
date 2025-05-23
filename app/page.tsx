"use client"; // for image swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import TopBar from "@/components/navigation/topBar";
import swiperImg1 from "@/assets/images/home/1.jpg";
import swiperImg2 from "@/assets/images/home/2.jpg";
import swiperImg3 from "@/assets/images/home/3.jpg";
import ParallaxImageSections from "@/components/image/parallaxImageSections";

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
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="py-20 lg:py-40 flex justify-center items-center px-4">
        <div className="max-w-[40rem] text-4xl text-center">
          Be Shine Textile Inc. – Canada’s premier leader of customized
          wallcoverings, offering ideas and inspiration to transform your space.
        </div>
      </div>

      <ParallaxImageSections
        sections={[
          {
            titleRow1: "Custom Printing",
            titleRow2: "Wall Fabric",
            smallImageUrl: "/image/home/product_1s-min.jpg",
            largeImageUrl: "/image/home/product_1-min.jpg",
            content:
              "Be Shine Textile Inc. is a leading provider of custom wallcoverings, offering seamless solutions that bring style and creativity to any space. We work with both commercial and residential clients to turn their unique ideas into reality through expert design and professional installation.",
            align: "left",
          },
          {
            titleRow1: "Yarn Dyed",
            titleRow2: "Wall Fabric",
            smallImageUrl: "/image/home/product_2s-min.jpg",
            largeImageUrl: "/image/home/product_2-min.jpg",
            content:
              "Be Shine Textile offers a variety of fabric wallcoverings in standard colors and textures. Clients can explore our sample collection at our Markham showroom to find the perfect match, supported by expert craftsmanship and seamless installation.",
            align: "right",
          },
          {
            titleRow1: "Embroidered",
            titleRow2: "Wall Fabric",
            smallImageUrl: "/image/home/product_3s-min.jpg",
            largeImageUrl: "/image/home/product_3-min.jpg",
            content:
              "Add a touch of luxury with our embroidered wall fabrics — perfect for premium settings. Contact us for tailor-made solutions to elevate your space with custom elegance.",
            align: "left",
          },
          {
            titleRow1: "Commercial Vinyl & Signs",
            titleRow2: "",
            smallImageUrl: "/image/home/product_4s-min.jpg",
            largeImageUrl: "/image/home/product_4-min.jpg",
            content:
              "We provide fast, customized solutions for commercial vinyl and signage using a variety of materials, including matte, gloss, and textured finishes. From branding to company signs, your ideal design is produced promptly and installed seamlessly to elevate your commercial space.",
            align: "right",
          },
        ]}
      />

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
            {[
              "/image/clients/1.jpg",
              "/image/clients/2.png",
              "/image/clients/3.png",
              "/image/clients/4.png",
              "/image/clients/6.png",
              "/image/clients/7.png",
              "/image/clients/8.png",
              "/image/clients/10.png",
            ].map((src, index) => (
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
