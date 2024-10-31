import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import searchIcon from "../../../assets/icons/Search.svg";
import menuBar from "../../../assets/icons/Menu.svg";
import notification from "../../../assets/icons/Notification.svg";
import homeIcon from "../../../assets/icons/Home.svg";
import hotspotIcon from "../../../assets/icons/Location.svg";
import eventsIcon from "../../../assets/icons/calender.svg";
import chatBuddyIcon from "../../../assets/icons/message chat.svg";
import nomadLogo from "../../../assets/images/landingpage/NOMADHAVEN logo.svg";

const SearchBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const menuItems = [
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
      path: "/dashboard/hotspots",
    },
    {
      img: eventsIcon,
      alt: "events icon",
      title: "Events",
      id: 3,
      path: "/dashboard/events",
    },
    {
      img: chatBuddyIcon,
      alt: "chatbuddy icon",
      title: "Chat buddy",
      id: 4,
      path: "/dashboard/chatbuddy",
    },
  ];

  return (
    <header className="py-4 px-4 sm:px-6 bg-[#FFF] md:flex justify-between items-center space-y-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/">
        <img
          src={nomadLogo}
          width={150}
          className="md:hidden"
          alt="NomadHaven logo"
        />
        </NavLink>
        <div className="flex items-center ml-auto md:ml-0">
          <img
            src={menuBar}
            alt="hamburger menu"
            width={42}
            className="p-2 md:hidden cursor-pointer rounded-lg hover:border border-teal-600"
            onClick={toggleNav}
          />
        </div>
      </div>

      {isNavOpen && (
        <nav className="top-full left-0 w-full bg-white shadow-md mt-2 rounded-lg">
          {menuItems.map((menuItem) => (
            <Link to={menuItem.path} key={menuItem.id}>
              <div className="flex items-center gap-6 px-4 py-3 hover:bg-teal-100">
                <img src={menuItem.img} alt={menuItem.alt} width={20} />
                <p>{menuItem.title}</p>
              </div>
            </Link>
          ))}
        </nav>
      )}

      <div className="flex justify-between items-center w-full">
        <input
          type="search"
          id="search"
          placeholder="Search for your hotspots"
          className=" bg-White text-[#8A9292] border rounded-lg px-4 py-3 pl-12 w-full md:w-2/5"
          style={{
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "20px",
            backgroundPosition: "10px center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <img
          src={notification}
          alt="notification icon"
          width={42}
          className="p-2 ml-2 hidden md:block"
        />
      </div>
    </header>
  );
};

export default SearchBar;
