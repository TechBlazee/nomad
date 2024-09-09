// src/components/SideNav.jsx
import logo from "../../../assets/icons/NOMADHAVEN teal.svg";
import menuIcon from "../../../assets/icons/Menu.svg";
import homeIcon from "../../../assets/icons/Home.svg";
import eventsIcon from "../../../assets/icons/calender.svg";
import chatBuddyIcon from "../../../assets/icons/message chat.svg";
import hotspotIcon from "../../../assets/icons/Location.svg";
import settingIcon from "../../../assets/icons/settings.svg";
import supportIcon from "../../../assets/icons/customer-service.svg";
import communityIcon from "../../../assets/icons/community-group.svg";
import niphemy from "../../../assets/images/landingpage/niphemi.svg";
import dropdownIcon from "../../../assets/icons/Dropdown.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cards] = useState([
    {
      img: homeIcon,
      alt: "home icon",
      title: "Home",
      id: 1,
      path: "/dashboard",
    },
    {
      img: hotspotIcon,
      alt: "hotspot icon",
      title: "Hotspots",
      id: 2,
      path: "hotspots",
    },
    {
      img: eventsIcon,
      alt: "events icon",
      title: "Events",
      id: 3,
      path: "events",
    },
    {
      img: chatBuddyIcon,
      alt: "chatbuddy icon",
      title: "Chat buddy",
      id: 4,
      path: "chatbuddy",
    },
  ]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Logo and Menu Icon for Small Screens */}
      <section
        className="sm:hidden flex items-center justify-between px-4 py-2"
        onClick={toggleNav}
      >
        <div className="h-10">
          <img src={logo} alt="nomadHaven logo" width={190} />
        </div>
        <img src={menuIcon} alt="menu icon" className="cursor-pointer" />
      </section>

      {/* Full SideNav */}
      <nav
        className={`flex flex-col gap-10 items-center border-4 px-4 py-9 ${
          isOpen ? "block" : "hidden"
        } sm:flex-col sm:gap-10 sm:items-center sm:border-4 sm:px-4 sm:py-9 sm:block`}
      >
        <div className="mt-auto h-10 sm:block hidden">
          <img src={logo} alt="nomadHaven logo" width={200} />
        </div>
        <div className="flex flex-col justify-between">
          <section className="flex flex-col mb-20">
            <h5 className="mb-4">MANAGE</h5>
            {cards.map((card) => (
              <Link
                to={card.path}
                className="flex items-center hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg"
                key={card.id}
              >
                <img src={card.img} alt={card.alt} />
                <p>{card.title}</p>
              </Link>
            ))}
          </section>

          <div className="flex flex-col gap-10 mb-auto">
            <section>
              <h5 className="mb-4">PREFERENCE</h5>
              <Link
                to="settings"
                className="flex items-center hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg"
              >
                <img src={settingIcon} alt="settings icon" />
                <p>Settings</p>
              </Link>
              <Link
                to="helpsupport"
                className="flex items-center hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg"
              >
                <img src={supportIcon} alt="help & support icon" />
                <p>Help & Support</p>
              </Link>
              <Link
                to="community"
                className="flex items-center hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg"
              >
                <img src={communityIcon} alt="community icon" />
                <p>Community</p>
              </Link>
            </section>
            <section className="flex items-center gap-4">
              <img src={niphemy} alt="user profile" />
              <div className="flex items-center gap-1">
                <p>niphemy@gmail.com</p>
                <img src={dropdownIcon} alt="dropdown icon" width={18} />
              </div>
            </section>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
