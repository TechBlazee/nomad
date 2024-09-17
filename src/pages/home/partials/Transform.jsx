import { useState } from "react";
import no1 from "../../../assets/icons/no-3.svg";
import no2 from "../../../assets/icons/no-2.svg";
import no3 from "../../../assets/icons/no-1.svg";
const Transform = () => {
  const [cards, setCards] = useState([
    {
      image: no1,
      alt: "first card",
      title: "Create an account",
      description:
        "Start by creating an account on our platform. This will provide you with access to our exclusive collection of Naija landmarks.",
      id: 1,
    },
    {
      image: no2,
      alt: "second card",
      title: "Find trending hotspots",
      description:
        "Search and Immerse yourself in a vibrant gallery featuring the most popular hotspots and breathtaking landmarks from all corners of the country.",
      id: 2,
    },
    {
      image: no3,
      alt: "third card",
      title: "Bookmark latest events",
      description:
        "Stay up-to-date with all the exciting events and never miss out, from local festivals and concerts to exclusive webinars and industry conferences.",
      id: 3,
    },
  ]);
  return (
    <div className="mx-auto px-4 sm:px-10  mb-40">
      <div>
        <h2 className="text-center">
          How to <span>transform</span> your Naija trip in seconds?
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center  gap-12 mt-[60px]">
        {cards.map((card) => (
          <section
            className="flex flex-col items-center justify-center gap-6 bg-[#E6FBFB] border border-[#E6FBFB] rounded-2xl px-12 py-10 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] "
            key={card.id}
          >
            <div>
              <img src={card.image} alt={card.alt} width={80} />
            </div>
            <div>
              <h5>{card.title}</h5>
            </div>
            <div>
              <p className="text-center">{card.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Transform;
