import React from "react";
import Masonry from "react-masonry-css"; // Import Masonry
import nikeArtGallery from "../../../assets/images/landingpage/nike-gallery-2.svg";
import landMark from "../../../assets/images/landingpage/land-mark-beach.svg";
import sugarConference from "../../../assets/images/landingpage/sugar-conference.svg";
import lekkiReserve from "../../../assets/images/landingpage/lekki-reserve.svg";
import guaraWaterfalls from "../../../assets/images/dashboard/guara waterfall.svg";
import heritageSpot from "../../../assets/images/dashboard/heritage spot badagry.svg";
import oguduCattleRanch from "../../../assets/images/dashboard/ogudu waterfall.svg";
import ijeshaWaterfall from "../../../assets/images/dashboard/ijesha waterfall.svg";
import agbokim from "../../../assets/images/dashboard/agboAkim Waterfalls.svg";
import gosiWarmSpring from "../../../assets/images/dashboard/gbosi waterfall.svg";
import arrow from "../../../assets/icons/yellow-right-arrow.svg";
import see from "../../../assets/icons/white-see.svg";
import love from "../../../assets/icons/red-love.svg";
import { NavLink } from "react-router-dom";

// Cards array with data
const cards = [
  {
    id: 1,
    image: nikeArtGallery,
    title: "Nike Art Gallery",
    height: "h-72",
    location: "Lagos",
    views: "500",
  },
  {
    id: 2,
    image: oguduCattleRanch,
    title: "Ogudu Cattle Ranch",
    height: "h-96",
    location: "Calabar",
    views: "300",
  },
  {
    id: 3,
    image: landMark,
    title: "Landmark Resort",
    height: "h-72",
    location: "Lagos",
    views: "120",
  },
  {
    id: 4,
    image: guaraWaterfalls,
    title: "Gurara Waterfalls",
    height: "h-96",
    location: "Niger",
    views: "250",
  },
  {
    id: 5,
    image: sugarConference,
    title: "Sugar Conference",
    height: "h-72",
    location: "Abuja",
    views: "220",
  },
  {
    id: 6,
    image: heritageSpot,
    title: "Badagry Heritage Museum",
    height: "h-96",
    location: "Lagos",
    views: "380",
  },
  {
    id: 7,
    image: ijeshaWaterfall,
    title: "Erin Ijesha Waterfall",
    height: "h-72",
    location: "Osun",
    views: "300",
  },
  {
    id: 8,
    image: lekkiReserve,
    title: "Lekki Reserve Center",
    height: "h-96",
    location: "Lagos",
    views: "800",
  },
  {
    id: 9,
    image: agbokim,
    title: "Agbokim Waterfall",
    height: "h-72",
    location: "Calabar",
    views: "600",
  },
  {
    id: 10,
    image: gosiWarmSpring,
    title: "Gosi Warmspring",
    height: "h-96",
    location: "Ekiti",
    views: "700",
  },
  // Add more card objects here if necessary
];

// Breakpoints for masonry columns
const breakpointColumnsObj = {
  default: 3, // 3 columns by default
  1100: 2, // 2 columns for screens smaller than 1100px
  700: 1, // 1 columns for screens smaller than 700px
};

const HotSpots = () => {
  return (
    <section className="bg-gray-100 px-6 py-10">
      {/* Masonry layout starts here */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4" // Parent masonry div styling
        columnClassName="masonry-column space-y-4" // Masonry column styling
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative w-full ${card.height} rounded-lg shadow-lg overflow-hidden`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full bg-black bg-opacity-40 text-white px-4 py-7 opacity-0 transition-opacity hover:opacity-100">
              <div className="flex flex-col justify-between w-full h-full">
                <section className="flex justify-between items-start">
                  <div className="flex flex-col justify-start">
                    <p className="text-[#E6E7E7]">{card.title}</p>
                    <p>
                      <small className="text-[#E6E7E7]">{card.location}</small>
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-1">
                      <img src={see} alt="number of views icon" width={15} />
                      <p className="text-[#E6E7E7]">{card.views}</p>
                    </div>
                    <img src={love} alt="like icon" width={24} height={24} />
                  </div>
                </section>
                <section className="flex items-center justify-between">
                  <button className="m-2 px-4 py-2 primaryBtn">Book</button>
                  <NavLink to="chatbuddy">
                  <button className="m-2 px-4 py-2 tertiaryBtn hover:text-mintGreen">
                    Chat buddy
                    <img src={arrow} alt="right arrow" />
                  </button>
                  </NavLink>
                </section>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
      {/* Masonry layout ends here */}
    </section>
  );
};

export default HotSpots;
