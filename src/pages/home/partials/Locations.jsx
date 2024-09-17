import { useState } from "react";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import nike from "../../../assets/images/nike-art-gallery.svg";
import landmark from "../../../assets/images/landmark-beach.svg";
import sugar from "../../../assets/images/sugar-restaurant.svg";
const Locations = () => {
  const [cards, setCards] = useState([
    {
      image: nike,
      alt: " interior of nike art gallery",
      title: "Nike Art Gallery",
      description: "Art & Craft",
      location: "Ikeja, Lagos",
      id: 1,
    },
    {
      image: landmark,
      alt: "view of landmark beach resort center",
      title: "Landmark Beach",
      description: "Resort & Relaxation",
      location: "Ikeja,Lagos",
      id: 2,
    },
    {
      image: sugar,
      alt: "interior view of sugar restaurant",
      title: "Sugar Restaurant",
      description: "Resort & Relaxation",
      location: "Wuse, Abuja",
      id: 3,
    },
  ]);
  return (
    <div className=" flex flex-col items-center justify-center gap-[60px]  mx-4 sm:mx-10 md:mx-[60px] lg:mx-20 mb-40 ">
      <div>
        <h2>
          Top <span>Trending</span> Locations
        </h2>
      </div>
      <div className="flex flex-wrap place-content-center  gap-10 ">
        {cards.map((card) => (
          <section
            className="flex flex-col items-start justify-center w-fit md:w-[45%] lg:w-[30%]"
            key={card.id}
          >
            <div className="w-full">
              <img src={card.image} alt={card.alt} width={400} />
            </div>
            <div className="flex flex-col w-full mt-6 gap-2">
              <h3>{card.title}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <small>{card.description}</small>
                  </p>
                </div>
                <div className="border border-[#FCEBCE] bg-[#FCEBCE] px-3 py-0.5">
                  <p>
                    <small>{card.location}</small>
                  </p>
                </div>
              </div>
              <div>
                <button className="tertiaryBtn gap-2 ">
                  View location <img src={arrow} alt="arrow icon" />
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Locations;
