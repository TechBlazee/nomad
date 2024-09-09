import elizabeth from "../../../assets/images/landingpage/elizabeth.svg";
import shola from "../../../assets/images/landingpage/shola.svg";
import niphemi from "../../../assets/images/landingpage/niphemi.svg";
import star from "../../../assets/images/landingpage/5star.svg";
import { useState } from "react";

const Testimonials = () => {
  const [Cards, setCards] = useState([
    {
      title: "Emily",
      image: elizabeth,
      alt: "elizabeth in a blue dress",
      testimony:
        "I absolutely love NomadHaven! It’s my go-to app for finding events and cool spots in the city. The personalized recommendations are spot-on, and I've discovered so many amazing places I wouldn't have found otherwise.",
    },
    {
      title: "Niphemy",
      image: niphemi,
      alt: "niphemi in a black dress",
      testimony:
        "NomadHaven has completely transformed how I spend my weekends. The curated event listings are fantastic, and I’ve been able to attend some really unique events thanks to the app. The user reviews and ratings are helpful, and the exclusive deals are a great bonus.",
    },
    {
      title: "Elizabeth",
      image: elizabeth,
      alt: "elizabeth in a blue dress",
      testimony:
        "I’ve tried several event apps, but NomadHaven is by far the best. The custom recommendations are tailored perfectly to my interests, making it easy to find things I’ll enjoy. The booking process is secure and straightforward, and I appreciate the insider tips and local insights.",
    },
    {
      title: "Shola",
      image: shola,
      alt: "shola looking up",
      testimony:
        "NomadHaven is a fantastic app for discovering new places and events. The personalized recommendations are usually spot-on, and I love the variety of listings available. The only improvement I’d suggest is more integration with public transport options.",
    },
  ]);

  return (
    <section className="py-20 bg-White mb-40 px-4 sm:px-10 md:px-[60px] lg:px-20">
      <h2 className="text-center mb-20 text-xl sm:text-2xl lg:text-3xl">
        Why do they <span>love</span> NomadHaven?
      </h2>
      <div className="flex flex-col sm:flex-row gap-5 overflow-x-auto no-scrollbar">
        {Cards.map((card, index) => (
          <div
            className="bg-[#E6E7E7] rounded-2xl flex-shrink-0 p-5 w-full sm:w-80 md:w-96 lg:w-1/3"
            key={index}
          >
            <img src={star} alt="star rating icon" className="w-20 mb-4" />
            <p className="mb-4">{card.testimony}</p>
            <div className="flex items-center space-x-4">
              <img
                src={card.image}
                alt={card.alt}
                className="w-12 h-12 rounded-full"
              />
              <p className="font-semibold">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
