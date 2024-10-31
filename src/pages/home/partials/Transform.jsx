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
    <div className="mx-4 sm:mx-8 md:mx-[60px] lg:mx-20 mb-40">
      <div className=" mx-auto">
        <h2 className="text-center">
          How to <span>transform</span> your Naija trip in seconds?
        </h2>
      </div>
      {/* Grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 mt-16 mx-16">
        {cards.map((card, index) => (
          <section
            className={`flex flex-col  items-center justify-center bg-[#E6FBFB] border border-[#E6FBFB] rounded-2xl p-6 sm:p-10 w-full h-full ${
              index === 2
                ? "sm:col-span-2 sm:w-1/2 sm:mx-auto lg:w-full lg:col-span-1"
                : ""
            }`}
            key={card.id}
            style={{ minHeight: "300px" }}
            // Ensure cards have equal height
          >
            <div>
              <img src={card.image} alt={card.alt} width={60} />
            </div>
            <div>
              <h5 className="text-center pb-1 pt-5">{card.title}</h5>
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
