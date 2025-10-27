import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    comment:
      "Absolutely loved the experience! The team was professional, responsive, and exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Emily Watson",
    designation: "Project Manager",
    comment:
      "Great service and attention to detail. I would recommend them to anyone looking for quality work.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Business Analyst",
    comment:
      "Their support team is top-notch. Always quick to respond and genuinely helpful.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Sophia Lee",
    designation: "Marketing Head",
    comment:
      "They brought our vision to life perfectly! Highly satisfied with the final results.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Chris Evans",
    designation: "UI/UX Designer",
    comment:
      "A smooth and delightful experience from start to finish. Would work with them again!",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    designation: "Content Strategist",
    comment:
      "Professional, creative, and very reliable. Loved the way they handled our project.",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    id: 7,
    name: "David Kim",
    designation: "Product Designer",
    comment:
      "Excellent communication throughout. The project turned out better than I imagined.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 8,
    name: "Linda Parker",
    designation: "HR Executive",
    comment:
      "They delivered on time with amazing quality. Super friendly team too!",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 9,
    name: "Ryan Hall",
    designation: "Tech Lead",
    comment:
      "Top-tier work ethic and commitment to client satisfaction. Great experience overall.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 10,
    name: "Nina Patel",
    designation: "Entrepreneur",
    comment:
      "They helped our brand stand out beautifully. I’m grateful for their creative input.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

      <div className="relative flex justify-center items-center overflow-hidden w-full max-w-4xl mx-auto h-[420px]">
        <AnimatePresence>
          {[prevIndex, current, nextIndex].map((index, i) => {
            const testimonial = testimonials[index];
            const isActive = index === current;

            return (
              <motion.div
                key={testimonial.id}
                className={`absolute w-[80%] md:w-[60%] ${
                  isActive ? "z-20" : "z-10"
                }`}
                initial={{ opacity: 0, scale: 0.8, x: i === 0 ? -200 : 200 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.9,
                  x: i === 0 ? "-50%" : i === 2 ? "50%" : "0%",
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`card transition-all duration-500 ${
                    isActive
                      ? "bg-base-200 shadow-2xl border border-gray-700"
                      : "bg-base-300 shadow-md blur-[2px]"
                  }`}
                >
                  <div className="card-body items-center text-center">
                    <div className="avatar mb-4">
                      <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                    <p className="italic opacity-90 text-gray-200 mb-3">
                      “{testimonial.comment}”
                    </p>
                    <h3 className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white w-6" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
