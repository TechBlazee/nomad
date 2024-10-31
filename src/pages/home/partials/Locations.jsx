import { useState } from "react";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import nike from "../../../assets/images/nike-art-gallery.svg";
import landmark from "../../../assets/images/landmark-beach.svg";
import sugar from "../../../assets/images/sugar-restaurant.svg";

const Locations = () => {
  const [cards] = useState([
    {
      image: nike,
      alt: "interior of nike art gallery",
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
      location: "Ikeja, Lagos",
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
    <section className="flex flex-col items-center justify-center gap-[60px] mx-4 sm:mx-10 md:mx-[60px] lg:mx-20 mb-40">
      <div>
        <h2>
          Top <span>Trending</span> Locations
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {cards.map((card, index) => (
          <div
            className={`flex flex-col items-center mx-auto rounded-lg w-full max-w-xs ${
              index === 2 ? "sm:col-span-2 sm:mx-auto lg:col-span-1" : ""
            }`}
            key={card.id}
          >
            <div className="w-full h-64 sm:h-80 md:h-64 lg:h-96">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full mt-4 gap-1 px-4">
              <h4>{card.title}</h4>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">{card.description}</p>
                <div className="border border-[#FCEBCE] bg-[#FCEBCE] px-3 py-0.5">
                  <p className="text-sm">{card.location}</p>
                </div>
              </div>
              <button className="tertiaryBtn gap-2 px-0 py-0 pt-4">
                View location <img src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
