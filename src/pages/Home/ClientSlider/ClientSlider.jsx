import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import startPeople from "../../../assets/brands/start-people 1.png";
import start from "../../../assets/brands/start.png";

const logos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  startPeople,
  start,
];
export default function ClientLogoSlider() {
  return (
    <section className="bg-base-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold mb-8">
          Trusted by Leading Brands
        </h2>

        <Marquee
          gradient={false} // disables gradient fade effect
          speed={40} // scroll speed
          pauseOnHover={true} // pause when hovered
          direction="left" // can change to "right" if you want
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index}`}
              className="h-10 sm:h-12 w-auto mx-8 inline-block object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
