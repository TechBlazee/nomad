import { useState } from "react";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import festival from "../../../assets/images/landingpage/prime-friday.svg";
import seminar from "../../../assets/images/landingpage/knowledge-seminar.svg";
import influence from "../../../assets/images/landingpage/influence.svg";
const Events = () => {
  const [events] = useState([
    {
      image: festival,
      alt: " prime friday festival flier",
      title: "Prime Festival",
      date: "28th August, 2024",
      location: "Ikeja, Lagos",
      id: 1,
    },
    {
      image: seminar,
      alt: "knowledge & excellence seminar flier",
      title: "Excellence Seminar",
      date: "29th August, 2024",
      location: "Ota, Ogun",
      id: 2,
    },
    {
      image: influence,
      alt: "Influence conference flier",
      title: "Influence",
      date: "16th September, 2024",
      location: "Yaba, Lagos",
      id: 3,
    },
  ]);
  return (
    <section className="bg-[#fff] border-[#fff] space-y-3 rounded-lg p-2 sm:p-4 md:p-6 lg:w-1/2 ">
      <h5 className="font-medium text-xs text-[#8A9292] tracking-widest">
        EVENTS
      </h5>
      {events.map((event) => (
        <div className="flex gap-5 items-center ">
          <div className="w-12">
            <img
              src={event.image}
              alt={event.alt}
              width={64}
              height={40}
              className="rounded-lg object-cover  "
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="space-y-2">
              <h6 className="text-base">{event.title}</h6>
              <p className="text-sm">{event.date}</p>
            </div>
            <p className="bg-[#FCEBCE] border-[#FCEBCE] inline-flex h-fit mt-auto px-2">
              {event.location}
            </p>
          </div>
        </div>
      ))}
      <button className="flex tertiaryBtn pl-0 text-base">
        View Events <img src={arrow} alt="right arrow icon" />
      </button>
    </section>
  );
};

export default Events;
