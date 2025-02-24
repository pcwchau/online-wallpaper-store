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

const HomePage = () => {
  return (
    <div>
      {/* First picture */}
      <div
        className="h-screen bg-cover flex justify-center items-center text-4xl text-center"
        style={{ backgroundImage: "url('/image/home/feather.jpg')" }}
      >
        Transforming Spaces with Artistic Precision and Perfect Wallcovering
      </div>

      {/* Content */}
      <div className="h-[80vh] bg-white flex justify-center items-center text-4xl text-center text-black">
        Art • Haute Couture • Hotels • Restaurants • Offices • Home • Condo •
        Eccentric • Fun
      </div>

      {/* Parallax Section */}
      {parallax.map((item) => {
        return (
          <div
            className="h-[80vh] bg-fixed bg-cover flex"
            style={{
              backgroundImage: "url('" + item.image + "')",
              justifyContent: item.align === "left" ? "flex-start" : "flex-end",
            }}
            key={item.title}
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
              <div className="text-7xl w-[26rem] text-center mb-[2rem]">
                {item.title}
              </div>
              <div className="w-[26rem] text-center">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
