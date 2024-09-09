import { useNavigate } from "react-router-dom";
import { useState } from "react";
import arrow from "../../../assets/icons/Right arrow.svg";
import bulletin from "../../../assets/icons/yellow-bulletin.svg";
import mobile from "../../../assets/images/landingpage/phone-component.svg";
const Explore = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
  };

  const [cards, setCards] = useState([
    {
      description:
        "Stay updated with an extensive directory of concerts, festivals,workshops, and more.",
      id: 1,
    },
    {
      description:
        "Explore handpicked recommendations of must-visit places and hidden gems.",
      id: 2,
    },
    {
      description:
        "Get the latest information on events and places, right when you need it.",
      id: 3,
    },
  ]);
  return (
    <section className="bg-[#004D4D] border border-[#004D4D] rounded-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 sm:pt-8 md:pt-24 lg:pt-14 mb-40 flex place-content-center ">
      <div className="pt-6 rounded-2xl px-12   flex flex-col lg:flex-row lg:px-20 place-items-center gap-20 lg:place-items-end">
        <div className=" flex flex-col gap-4 sm:mr-24 md:mr-40 lg:mr-0">
          <div>
            <h1 className="text-White">
              Explore <span className="text-White"> Naija </span> with
              NomadHaven
            </h1>
          </div>
          <div className=" flex flex-col gap-4  ">
            {cards.map((card) => (
              <div className="flex items-center gap-6" key={card.id}>
                <img src={bulletin} alt="bullet points image" width={20} />
                <p className="text-White">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="my-12">
            <button className="primaryBtn" onClick={handleButtonClick}>
              Start exploring now{" "}
              <img src={arrow} alt="arrow icon" width={18} />
            </button>
          </div>
        </div>
        <div className="flex  mb-0 ">
          <img
            src={mobile}
            alt="mobile view of a part in lagos"
            width={350}
            className="md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;
