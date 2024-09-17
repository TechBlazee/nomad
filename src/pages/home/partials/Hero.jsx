import { useNavigate } from "react-router-dom";
import fiveStar from "../../../assets/icons/fivestar.svg";
import image1 from "../../../assets/images/landingpage/sugar-conference.svg";
import image2 from "../../../assets/images/landingpage/nike-gallery-2.svg";
import image3 from "../../../assets/images/landingpage/land-mark-beach.svg";
import image4 from "../../../assets/images/landingpage/lekki-reserve.svg";
import herobg from "../../../assets/images/landingpage/hero-bg.svg";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
  };

  return (
    <header
      className="mb-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="relative z-10 text-center flex flex-col gap-14 p-4 sm:p-8 md:p-10 lg:p-16 mb-40 pt-32">
        <section className="flex flex-col md:flex-row justify-between mx-auto items-center gap-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p className="text-sm sm:text-base md:text-lg">
              “My fun and hangout organizer”
            </p>
          </div>
          <div className="flex flex-col items-center mb-6  md:flex md:mb-0">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p className="text-sm sm:text-base md:text-lg">
              “The perfect map to Naija’s trending spots.”
            </p>
          </div>
          <div className="flex flex-col items-center lg:flex lg:mb-0">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p className="text-sm sm:text-base md:text-lg">
              “Cruise, hangout, fun, they have it all.”
            </p>
          </div>
        </section>
        <section>
          <div className="mb-6">
            <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Transform Every Trip into a
              <span className="font-bold"> Storybook</span> Adventure
            </h1>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg">
              Connect with the vibrant cultures and breathtaking landmarks
              through NomadHaven, your portal to Nigeria’s hidden gems.
            </p>
          </div>
        </section>
        <section>
          <button className="primaryBtn mx-auto" onClick={handleButtonClick}>
            Let&#39;s begin your trip
          </button>
        </section>
      </div>
      <section className="flex flex-wrap justify-center items-center gap-4 px-4">
        <img
          src={image4}
          alt="lekki reserve"
          className="border-4 border-white rounded-2xl rotate-[-4deg] w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
        <img
          src={image2}
          alt="interior view of nike art gallery"
          className="border-4 border-white rounded-2xl -rotate-[-4deg] w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
        <img
          src={image3}
          alt="landmark beach"
          className="border-4 border-white rounded-2xl rotate-[-4deg]  sm:block w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        />
        <img
          src={image1}
          alt="sugar conference hall"
          className="border-4 border-white rounded-2xl -rotate-[-4deg]  md:block w-full md:w-1/3 lg:w-1/4"
        />
      </section>
    </header>
  );
};

export default Hero;
