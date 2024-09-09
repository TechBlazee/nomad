import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          className=" text-white p-3 rounded-full cursor-pointer"
        >
          <FaArrowUp style={{ fontSize: "44px" }} />
        </ScrollLink>
      )}
    </div>
  );
};

export default BackToTop;
