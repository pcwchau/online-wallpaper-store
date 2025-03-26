import PhoneIcon from "@/assets/icons/phoneIcon";
import EmailIcon from "@/assets/icons/emailIcon";
import LocationIcon from "@/assets/icons/locationIcon";
import Link from "next/link";

const BottomContactBar = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/HpJ9MMpKPf4fDa8a8";

  return (
    <div className="py-20 flex flex-col justify-center items-center space-y-4 bg-secondary text-secondary-text">
      <div className="text-4xl mb-4">CONTACT</div>
      <div className="flex items-center space-x-2">
        <PhoneIcon />
        <div>(647) 498-7999</div>
      </div>
      <div className="flex items-center space-x-2">
        <EmailIcon />
        <div>sales@beshinetextile.com</div>
      </div>
      <div className="flex items-center space-x-2">
        <LocationIcon />
        <Link href={googleMapsUrl} target="_blank">
          2710 14th Ave, Markham, ON L3R 0J1
        </Link>
      </div>
    </div>
  );
};

export default BottomContactBar;
