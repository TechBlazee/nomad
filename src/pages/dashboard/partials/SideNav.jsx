import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/NOMADHAVEN teal.svg";
import menuIcon from "../../../assets/icons/Menu.svg";
import homeIcon from "../../../assets/icons/Home.svg";
import eventsIcon from "../../../assets/icons/calender.svg";
import chatBuddyIcon from "../../../assets/icons/message chat.svg";
import hotspotIcon from "../../../assets/icons/Location.svg";
import settingIcon from "../../../assets/icons/settings.svg";
import supportIcon from "../../../assets/icons/customer-service.svg";
import communityIcon from "../../../assets/icons/community-group.svg";
import logout from "../../../assets/icons/logout.svg"

const SideNav = () => {
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
      path: "events",
    },
    {
      img: chatBuddyIcon,
      alt: "chatbuddy icon",
      title: "Chat buddy",
      id: 4,
      path: "chatbuddy",
    },
  ];

  return (
    // Wrapper div that hides on small screens and displays on medium and large screens
    <div className="hidden md:flex md:flex-col md:relative pt-5 ">
      {/* Full SideNav */}
      <nav className="flex flex-col items-center justify-between pt-5 bg-white min-w-56 max-w-fit h-screen">
        <NavLink to="/" className=" mb-5 mr-auto pl-5">
          <img src={logo} alt="nomadHaven logo" width={160} />
        </NavLink>
        <div className="flex flex-col gap-10 w-fit ">
          {/*first section of side nav*/}
          <section className="flex flex-col mb-5 w-full h-fit">
            <h6 className="mb-1 text-[#8A9292] font-light text-sm tracking-widest">
              MANAGE
            </h6>
            {menuItems.map((item) => (
              <Link
                to={item.path}
                className="flex items-center hover:bg-mintGreen gap-2 mb-4 px-4 py-2 rounded-lg transition-colors"
                key={item.id}
              >
                <img src={item.img} alt={item.alt} width={20} />
                <p>{item.title}</p>
              </Link>
            ))}
          </section>

          <div className="flex flex-col justify-between w-full h-fit">
            {/*second section of side nav*/}
            <section>
              <h6 className="mb-4 text-[#8A9292] font-light text-sm tracking-widest">
                PREFERENCE
              </h6>
              <Link
                to="settings"
                className="flex items-center hover:bg-mintGreen gap-2 mb-4 px-4 py-2 rounded-lg transition-colors"
              >
                <img src={settingIcon} alt="settings icon" width={20} />
                <p>Settings</p>
              </Link>
              <Link
                to="helpsupport"
                className="flex items-center hover:bg-mintGreen gap-2 mb-4 px-4 py-2 rounded-lg transition-colors"
              >
                <img src={supportIcon} alt="help & support icon" width={20} />
                <p>Help & Support</p>
              </Link>
              <Link
                to="community"
                className="flex items-center hover:bg-mintGreen gap-2 mb-4 px-4 py-2 rounded-lg transition-colors"
              >
                <img src={communityIcon} alt="community icon" width={24} />
                <p>Community</p>
              </Link>
              <Link
                to="/"
                className="flex items-center hover:bg-mintGreen gap-2 mb-4 px-4 py-2 rounded-lg transition-colors"
              >
                <img src={logout} alt="community icon" width={20} />
                <p>Logout</p>
              </Link>
            </section>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
