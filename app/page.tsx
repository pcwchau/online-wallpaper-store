import Image from "next/image";
import pic from "../assets/images/hero3.jpg";

const HomePage = () => {
  return (
    <div>
      <Image src={pic} alt="Picture of the author" />
    </div>
  );
};

export default HomePage;
