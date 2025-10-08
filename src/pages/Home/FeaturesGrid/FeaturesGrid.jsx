import React from "react";
import trackingImg from "../../../assets/tracking.png";
import safeDeliveryImg from "../../../assets/safe.png";
import supportImg from "../../../assets/support.png";
// If you keep images in /public/features/ you can reference them directly:
const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Track your parcel in real time from pickup to delivery with accurate location updates.",
    imgSrc: trackingImg,
    imgAlt: "Live tracking icon",
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure product safety with secure handling, tamper-evident packaging and insurance options.",
    imgSrc: safeDeliveryImg,
    imgAlt: "Safe delivery icon",
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our customer support is available round-the-clock to help with any issue or query.",
    imgSrc: supportImg,
    imgAlt: "24/7 support icon",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Our Special Features</h2>
        <p className="mt-3 text-base text-base-content/70 max-w-2xl mx-auto">
          We built our service to be fast, safe and reliable — features designed
          to make sending and receiving parcels effortless.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <article
            key={f.id}
            className="bg-base-100 border border-base-200 rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              {/* Image block */}
              <div className="flex-shrink-0">
                <img
                  src={f.imgSrc}
                  alt={f.imgAlt || f.title}
                  loading="lazy"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-md"
                />
              </div>

              {/* Text block */}
              <div className="text-left">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-base-content/70">
                  {f.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
