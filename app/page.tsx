import Image from "next/image";
import pic from "../assets/images/hero3.jpg";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Image src={pic} alt="Picture of the author" />
    </div>
  );
};

export default HomePage;
