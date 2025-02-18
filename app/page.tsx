import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* First picture */}
      <div className="h-screen w-full relative">
        <Image
          src="/home-black-feather.jpg"
          fill
          alt="wall coverings black feather"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="h-screen w-full relative bg-white"></div>

      {/* Parallax Section 1 */}
      <div className="relative h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home-who-we-are.jpg')" }}
        />
        <div className="relative w-[600px] h-full bg-black/20 justify-center items-center">
          <div className="text-6xl">WHO WE ARE</div>
          <div>
            Be Shine Textile Inc. is a premium leader of custom wallcoverings,
            offering tailored solutions that transform spaces with style and
            creativity. We cater to both commercial and residential clients,
            bringing their unique visions to life through our expertise in
            artistic design and professional installation.
          </div>
        </div>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative h-screen flex items-center justify-end text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home-what-we-do.jpg')" }}
        />
        <div className="relative w-1/3 bg-black">hihi</div>
      </div>

      {/* Parallax Section 3 */}
      <div className="relative h-screen flex items-center justify-start text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home-based-in-toronto.jpg')" }}
        />
        <div className="relative w-1/3 bg-black">hihi</div>
      </div>

      {/* Parallax Section 4 */}
      <div className="relative h-screen flex items-center justify-end text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home-quality-assurance.jpg')" }}
        />
        <div className="relative w-1/3 bg-black">hihi</div>
      </div>
    </div>
  );
};

export default HomePage;
