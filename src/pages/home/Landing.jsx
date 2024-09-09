import Ask from "./partials/Ask";
import Events from "./partials/Events";
import Explore from "./partials/Explore";
import Hero from "./partials/Hero";
import Locations from "./partials/Locations";
import Supporters from "./partials/Supporters";
import Testimonials from "./partials/Testimonials";
import Transform from "./partials/Transform";
import Choose from "./partials/Choose";
import BackToTop from "../../components/BackToTop"; // Import the BackToTop component

const Landing = () => {
  return (
    <main id="top">
      {" "}
      {/* Add an id to the main element */}
      <section id="how-to-use">
        <Hero />
      </section>
      <section id="supporters">
        <Supporters />
      </section>
      <section id="transform">
        <Transform />
      </section>
      <section id="locations">
        <Locations />
      </section>
      <section id="choose">
        <Choose />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="explore">
        <Explore />
      </section>
      <section id="ask">
        <Ask />
      </section>
      <BackToTop /> {/* Add the BackToTop component */}
    </main>
  );
};

export default Landing;
