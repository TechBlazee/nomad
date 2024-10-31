import { useState } from "react";
import plusIcon from "../../../assets/icons/add.svg";
import closeIcon from "../../../assets/icons/Close.svg";

const Ask = () => {
  const [cards, setCards] = useState([
    {
      question: "What is NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 1,
    },
    {
      question: "Is NomadHaven free to use?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 2,
    },
    {
      question: "Can I leave reviews and ratings on NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 3,
    },
    {
      question: "How often is the information on NomadHaven updated?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 4,
    },
    {
      question: "How do I contact NomadHaven's support team?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 5,
    },
    {
      question:
        "Can I share events and places with friends through NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 6,
    },
  ]);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleToggle = (id) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };
  return (
    <section className="mx-4 sm:mx-8 md:mx-[60px] lg:mx-20 mb-40">
      <h2 className="text-center">
        What <span> People </span> Ask
      </h2>
      <div className="flex flex-col gap-10 mt-16">
        {cards.map((card) => (
          <div
            className="border border-[#B0B6B6] p-4 sm:p-6 md:p-8 lg:px-10 lg:py-4  rounded-2xl"
            key={card.id}
          >
            <div className="flex  justify-between items-center">
              <h6> {card.question}</h6>
              <div className="inline-flex">
                {expandedCardId === card.id ? (
                  <img
                    src={closeIcon}
                    alt="close icon"
                    width={40}
                    onClick={() => handleToggle(card.id)}
                    className="cursor-pointer"
                  />
                ) : (
                  <img
                    src={plusIcon}
                    alt="view icon"
                    width={40}
                    onClick={() => handleToggle(card.id)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            {expandedCardId === card.id && (
              <p className="mt-6">{card.answers}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ask;
