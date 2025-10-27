import React from "react";
import location from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat  bg-[#03373D] p-20 rounded-4xl"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer satisfaction is our first priority{" "}
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100 percent safety of your product.Zap Share delivers your
            parcel in every corner of Bangladesh right of time
          </p>
          <button className="btn btn-primary rounded-full">
            Become a Merchant
          </button>
          <button className="btn btn-primary btn-outline ms-4 rounded-full">
            Earn with ProFest
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
