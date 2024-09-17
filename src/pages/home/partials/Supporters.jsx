import airbnb from "../../../assets/icons/airbnb.svg";
import barclays from "../../../assets/icons/barclays.svg";
import masterCard from "../../../assets/icons/mastercard.svg";
import inDrive from "../../../assets/icons/indrive.svg";
import uber from "../../../assets/icons/uber.svg";
import flyEmirates from "../../../assets/icons/fly-emirates.svg";

const Supporters = () => {
  return (
    <div className="mx-4 items-center w-full mb-60">
      <div>
        <h5 className="text-center mb-10 font-normal text-xl sm:text-2xl lg:text-3xl">
          Proudly supported by
        </h5>
      </div>
      <div className="flex items-center justify-center overflow-x-auto lg:overflow-visible no-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-8">
          <img
            src={barclays}
            alt="barclays"
            className="w-20 h-20 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={flyEmirates}
            alt="fly Emirates"
            className="w-20 h-20 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={masterCard}
            alt="masterCard"
            className="w-20 h-20 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={inDrive}
            alt="inDrive"
            className="w-20 h-20 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={uber}
            alt="uber"
            className="w-20 h-20 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Supporters;
