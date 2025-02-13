const HomePage = () => {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      {/* Parallax Section 1 */}
      <div className="relative h-screen flex items-center justify-center text-white text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/parallax1.jpg')" }}
        ></div>
        <h1 className="relative z-10">Welcome to Section 1</h1>
      </div>

      {/* Content Section */}
      <div className="h-64 flex items-center justify-center text-xl">
        <p>Scroll down for more...</p>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative h-screen flex items-center justify-center text-white text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/parallax2.jpg')" }}
        ></div>
        <h1 className="relative z-10">Explore the View</h1>
      </div>

      {/* Content Section */}
      <div className="h-64 flex items-center justify-center text-xl">
        <p>Keep scrolling...</p>
      </div>

      {/* Parallax Section 3 */}
      <div className="relative h-screen flex items-center justify-center text-white text-4xl font-bold">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/parallax3.jpg')" }}
        ></div>
        <h1 className="relative z-10">Enjoy the Experience</h1>
      </div>
    </div>
  );
};

export default HomePage;
