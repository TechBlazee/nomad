import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import nike from "../../../assets/images/landingpage/nike-gallery-2.svg";
import landmark from "../../../assets/images/landingpage/land-mark-beach.svg";
import sugar from "../../../assets/images/landingpage/sugar-conference.svg";

const Hotspots = () => {
  const [hotspots, setHotspots] = useState([
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
    <section className="bg-[#fff] border-[#fff] space-y-3 rounded-lg lg:w-1/2 p-2 sm:p-4 md:p-6">
      <h5 className="font-medium text-xs text-[#8A9292] tracking-widest">
        HOTSPOTS
      </h5>
      {hotspots.map((hotspot) => (
        <div className="flex gap-5 items-center" key={hotspot.id}>
          <div className="w-12">
            <img
              src={hotspot.image}
              alt={hotspot.alt}
              width={64}
              height={40}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="space-y-2">
              <h6 className="text-base">{hotspot.title}</h6>
              <p>{hotspot.description}</p>
            </div>
            <p className="bg-[#FCEBCE] border-[#FCEBCE] inline-flex h-fit mt-auto px-2">
              {hotspot.location}
            </p>
          </div>
        </div>
      ))}
      <Link to="/dashboard/hotspots">
        <button className="flex tertiaryBtn pl-0 text-base">
          View Hotspots <img src={arrow} alt="right arrow icon" />
        </button>
      </Link>
    </section>
  );
};

export default Hotspots;
