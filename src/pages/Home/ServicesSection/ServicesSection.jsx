import React from "react";
import {
  FiTruck,
  FiMap,
  FiBox,
  FiDollarSign,
  FiBriefcase,
  FiRefreshCcw,
} from "react-icons/fi";

// ServicesSection.jsx
// - A self-contained React component for the "Our Services" section
// - Uses Tailwind + DaisyUI classes for styling
// - Responsive grid: 1 column (mobile) -> 2 cols (sm) -> 3 cols (lg)
// - Uses react-icons (install with `npm i react-icons`)

const servicesData = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    Icon: FiTruck,
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    Icon: FiMap,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    Icon: FiBox,
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    Icon: FiDollarSign,
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    Icon: FiBriefcase,
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    Icon: FiRefreshCcw,
  },
];

function ServiceCard({ title, description, Icon }) {
  return (
    <article className="card bg-base-100 shadow-lg p-6 border border-base-200 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
            <Icon aria-hidden="true" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-base-content/70 mt-2">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection({
  data = servicesData,
  id = "our-services",
}) {
  return (
    <section
      id={id}
      className="text-primary max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Our Services</h2>
        <p className="mt-4 text-base text-base-content/70">
          Enjoy fast reliable parcel delivery with real time tracking and zero
          hassle — from personal packages to business shipment. Deliver on time,
          every time.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((svc) => (
          <ServiceCard
            key={svc.id}
            title={svc.title}
            description={svc.description}
            Icon={svc.Icon}
          />
        ))}
      </div>
    </section>
  );
}
