import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import menu from "../assets/icons/Menu.svg";
import nomadHavenLogo from "../assets/icons/NOMADHAVEN teal.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white opacity-[0.8] flex justify-between items-center pt-9 px-4 md:px-20 pb-5 nav">
      <div>
        <NavLink to="/">
          <img src={nomadHavenLogo} alt="NomadHaven logo" />
        </NavLink>
      </div>
      <div className="justify-between w-[72%] hidden lg:flex">
        <div className="flex justify-around w-1/2">
          <ul className="flex gap-2 items-center justify-around w-full footer-ul">
            <NavLink to="#" onClick={(e) => e.preventDefault()}>
              <ScrollLink
                to="how-to-use"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer">How to Use</li>
              </ScrollLink>
            </NavLink>
            <NavLink to="#" onClick={(e) => e.preventDefault()}>
              <ScrollLink
                to="locations"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer">Hotspots</li>
              </ScrollLink>
            </NavLink>
            <NavLink to="#" onClick={(e) => e.preventDefault()}>
              <ScrollLink
                to="transform"
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer">Features</li>
              </ScrollLink>
            </NavLink>
            <NavLink to="#" onClick={(e) => e.preventDefault()}>
              <ScrollLink to="events" smooth={true} offset={-70} duration={500}>
                <li className="cursor-pointer">Events</li>
              </ScrollLink>
            </NavLink>
          </ul>
        </div>
        <div className="flex ml-auto gap-2 w-fit items-center justify-center">
          <NavLink to="/login">
            <button className="secondaryBtn text-Black">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="primaryBtn">Sign up for free</button>
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src={menu}
          alt="menu icon"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white opacity-95 border-t border-gray-300 z-50 lg:hidden overflow-y-auto max-h-screen no-scrollbar">
          <div className="flex flex-col items-center py-4">
            <ul className="flex flex-col gap-4 items-center">
              <NavLink to="#" onClick={(e) => e.preventDefault()}>
                <ScrollLink
                  to="how-to-use"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                >
                  <li className="cursor-pointer">How to Use</li>
                </ScrollLink>
              </NavLink>
              <NavLink to="#" onClick={(e) => e.preventDefault()}>
                <ScrollLink
                  to="locations"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                >
                  <li className="cursor-pointer">Hotspots</li>
                </ScrollLink>
              </NavLink>
              <NavLink to="#" onClick={(e) => e.preventDefault()}>
                <ScrollLink
                  to="transform"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                >
                  <li className="cursor-pointer">Features</li>
                </ScrollLink>
              </NavLink>
              <NavLink to="#" onClick={(e) => e.preventDefault()}>
                <ScrollLink
                  to="events"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                >
                  <li className="cursor-pointer">Events</li>
                </ScrollLink>
              </NavLink>
            </ul>
            <div className="flex flex-col mt-4 gap-2">
              <NavLink to="/login" onClick={closeMenu}>
                <button className="secondaryBtn text-black">Login</button>
              </NavLink>
              <NavLink to="/signup" onClick={closeMenu}>
                <button className="primaryBtn">Sign up for free</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
