import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
      className=" mb-40  bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="relative z-10 text-center flex flex-col gap-14 p-4 sm:p-8 md:p-10 lg:p-16 mb-10 md:mb-5 pt-10 md:pt-32">
        <section className="flex justify-between mx-auto items-center gap-8">
          <div className="flex flex-col items-center ">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“My fun and hangout organizer”</p>
          </div>
          <div className=" flex-col items-center hidden md:flex">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“The perfect map to Naija’s trending spots.”</p>
          </div>
          <div className="flex-col items-center hidden lg:flex  ">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“Cruise, hangout, fun, they have it all.”</p>
          </div>
        </section>
        <section className="w-3/4 mx-auto">
          <div className="mb-6">
            <h1 className="">
              Transform Every Trip into a
              <span className="spantag "> Storybook</span> Adventure
            </h1>
          </div>
          <div className="md:w-3/4 mx-auto">
            <p>
              Connect with the vibrant cultures and breathtaking landmarks
              through NomadHaven, your portal to the Nigeria’s hidden gems.
            </p>
          </div>
        </section>
        <Link to="/login">
          <button
            className="primaryBtn mx-auto px-6 py-3 font-semibold "
            onClick={handleButtonClick}
          >
            Let&#39;s begin your trip
          </button>
        </Link>
      </div>
      <section className="flex  items-center justify-center gap4 px-4">
        <img
          src={image4}
          alt="sugar conference hall"
          width={300}
          className="border-8 border-white rounded-2xl origin-top- rotate-[-4deg] w-4/5 sm:w-full  lg:w-1/4 shadow-md"
        />
        <img
          src={image2}
          alt="interior view of nike art gallery"
          width={300}
          className="border-8 border-white rounded-2xl origin-top- -rotate-[-4deg] w-4/5 sm:w-full  lg:w-1/4 shadow-md"
        />
        <img
          src={image3}
          alt="landmark beach"
          width={300}
          className="border-8 border-white rounded-2xl origin-top- rotate-[-4deg] hidden sm:block w-full lg:w-1/4 shadow-md"
        />
        <img
          src={image1}
          alt="sugar conference hall"
          width={300}
          className="border-8 border-white rounded-2xl origin-top- -rotate-[-4deg] hidden md:block w-full  lg:w-1/4 shadow-md "
        />
      </section>
    </header>
  );
};

export default Hero;
