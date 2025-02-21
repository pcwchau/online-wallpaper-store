export default function Home() {
  return (
    <div>
      <div className="h-80 bg-slate-600" />
      <div className="relative h-screen">
        <div
          // className="h-full absolute inset-0 "
          className="h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/home-who-we-are.jpg')" }}
          // style={{ backgroundImage: "url('/company-icon.png')" }}
        />
      </div>
      <div className="h-80 bg-slate-600" />
    </div>
  );
}
