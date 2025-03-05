import PhoneIcon from "@/assets/icons/phoneIcon";
import EmailIcon from "@/assets/icons/emailIcon";
import LocationIcon from "@/assets/icons/locationIcon";

const BottomContactBar = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center space-y-4">
      <div className="text-title-sm mb-4">CONTACT</div>
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
        <div>2710 14th Ave, Markham, ON L3R 0J1</div>
      </div>
    </div>
  );
};

export default BottomContactBar;
