import { useState } from "react";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import festival from "../../../assets/images/landingpage/prime-friday.svg";
import seminar from "../../../assets/images/landingpage/knowledge-seminar.svg";
import party from "../../../assets/images/landingpage/tiki-bar.svg";
import influence from "../../../assets/images/landingpage/influence.svg";
import vibes from "../../../assets/images/landingpage/vibes-on-vibes.svg";
import change from "../../../assets/images/landingpage/embracing-change.svg";

const Events = () => {
  const [cards] = useState([
    {
      image: festival,
      alt: "prime friday festival flier",
      title: "Prime Friday Festival",
      date: "28th August, 2024",
      location: "Ikeja, Lagos",
      id: 1,
    },
    {
      image: seminar,
      alt: "knowledge & excellence seminar flier",
      title: "Knowledge & Excellence Seminar",
      date: "29th August, 2024",
      location: "Ota, Ogun",
      id: 2,
    },
    {
      image: party,
      alt: "tiki bar party flier",
      title: "Tiki Bar Party",
      date: "21st August, 2024",
      location: "Yaba, Lagos",
      id: 3,
    },
    {
      image: influence,
      alt: "Influence conference flier",
      title: "Influence",
      date: "16th September, 2024",
      location: "Yaba, Lagos",
      id: 4,
    },
    {
      image: vibes,
      alt: "vibes on vibes",
      title: "Vibes on Vibes",
      date: "4th December, 2024",
      location: "Ikeja, Lagos",
      id: 5,
    },
    {
      image: change,
      alt: "embracing change & adaptability flier",
      title: "Embracing Change & Adaptability",
      date: "21st August, 2024",
      location: "Wuse, Abuja",
      id: 6,
    },
  ]);

  return (
    <div className="mx-4 sm:mx-10 md:mx-[60px] lg:mx-20 mb-40">
      <h2 className="mb-[60px] text-center">
        Latest <span>Upcoming</span> Events
      </h2>

      {/* Updated grid with equal card sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {cards.map((card) => (
          <section
            className="flex flex-col items-center rounded-lg mx-auto"
            key={card.id}
            style={{ minWidth: "100px", height: "100%", maxWidth:"80%" }} // Ensure equal width and height
          >
            <div className="w-full h-80">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover rounded-lg" // Keep image size consistent
              />
            </div>
            <div className="flex flex-col justify-between gap-2 pt-6 w-full">
              <h6>{card.title}</h6>
              <div className="flex justify-between items-center">
                <p>
                  <small>{card.date}</small>
                </p>
                <div className="border border-[#FCEBCE] bg-[#FCEBCE] px-3 py-0.5">
                  <p>
                    <small>{card.location}</small>
                  </p>
                </div>
              </div>
              <button className="tertiaryBtn gap-2 mt-4 p-0">
                View location <img src={arrow} alt="arrow icon" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Events;
