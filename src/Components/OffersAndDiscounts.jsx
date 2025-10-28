import React, { useState } from "react";
import { Home, Building, PlusCircle, Check } from "lucide-react";

// --- Data for Price Lists and Discounts ---
const priceListData = {
  homeCleaning: [
    {
      service: "Standard Cleaning",
      description: "Dusting, vacuuming, mopping, kitchen, bathroom cleaning",
      price: "$90",
      note: "(up to 2 bed/1 bath)",
    },
    {
      service: "Deep Cleaning",
      description: "Includes baseboards, behind appliances, etc.",
      price: "$160",
      note: "(up to 2 bed/1 bath)",
    },
    {
      service: "Move in/out Cleaning",
      description: "Empty home, deep clean of all rooms, bathrooms, kitchen",
      price: "$180 – $250",
    },
    {
      service: "Post Construction Cleaning",
      description: "Debris removal, dusting, detail cleaning of all rooms",
      price: "$200 – $300",
    },
  ],
  officeCleaning: [
    {
      service: "Basic Office Cleaning",
      description: "Dusting desks, vacuuming, trash removal, common areas",
      price: "$120",
      note: "(up to 1000 sq ft)",
    },
    {
      service: "Commercial Deep Clean",
      description:
        "Floor waxing, window cleaning, sanitization of high-touch areas",
      price: "$250 – $400",
    },
    {
      service: "Retail Store Cleaning",
      description: "Window displays, floor care, restroom sanitization",
      price: "$150 – $300",
    },
  ],
  addOnServices: [
    {
      service: "Window Cleaning (Interior)",
      description: "Sparkling clean interior windows",
      price: "$30 - $70",
    },
    {
      service: "Fridge Cleaning",
      description: "Inside cleaning of refrigerator",
      price: "$25",
    },
    {
      service: "Oven Cleaning",
      description: "Deep cleaning of oven interior",
      price: "$35",
    },
    {
      service: "Laundry Service",
      description: "Wash, dry, and fold clothes",
      price: "$40 / load",
    },
  ],
};

// --- Discount Data (external image URLs) ---
const discountData = [
  {
    percentage: "5%",
    offer: "Off Monthly Visits",
    image:
      "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/service_price_01.png",
    disclaimer: "*Recurring clients discounts",
  },
  {
    percentage: "10%",
    offer: "Off Bi-Weekly Visits",
    image:
      "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/service_price_02.png",
    disclaimer: "*Recurring clients discounts",
  },
  {
    percentage: "15%",
    offer: "Off Weekly Visits",
    image:
      "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/service_price_03.png",
    disclaimer: "*Recurring clients discounts",
  },
];

// --- PriceListTable ---
const PriceListTable = ({ services }) => (
  <div className="rounded-xl p-4 sm:p-6 md:p-8 space-y-4 bg-white/10">
    {services.map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/20 last:border-b-0"
      >
        <div className="flex-1 min-w-0">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
            {item.service}
          </h4>
          <p className="text-gray-200 text-sm flex items-start sm:items-center">
            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="truncate">{item.description}</span>
          </p>
        </div>
        <div className="text-left sm:text-right mt-2 sm:mt-0 sm:ml-4">
          <span className="text-lg sm:text-xl font-bold text-orange-400 block">
            {item.price}
          </span>
          {item.note && (
            <span className="text-gray-300 text-xs block">{item.note}</span>
          )}
        </div>
      </div>
    ))}
  </div>
);

// --- DiscountCard ---
const DiscountCard = ({ percentage, offer, image, disclaimer }) => (
  <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden h-44 sm:h-48 md:h-56 transition-transform transform hover:scale-105 hover:shadow-2xl">
    {/* Background Image */}
    <div
      className="absolute inset-0  bg-cover bg-no-repeat transition-all duration-500 group-hover:opacity-80"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "bottom  right",
        backgroundSize: "30%",
      }}
    ></div>

    <div className="z-10 md:right-18  right-15 relative">
      <h3 className="text-3xl sm:text-4xl text-left font-extrabold text-orange-500 mb-1 sm:mb-2 leading-none">
        {percentage}
      </h3>
      <p className="text-base sm:text-lg  text-left font-semibold text-gray-800 mb-1 sm:mb-2">
        {offer}
      </p>
      <p className="text-xs text-gray-500">{disclaimer}</p>
    </div>
  </div>
);

// --- Main Component ---
const OffersAndDiscounts = () => {
  const [activeTab, setActiveTab] = useState("homeCleaning");

  const tabs = [
    {
      key: "homeCleaning",
      icon: <Home className="w-5 h-5 mr-2" />,
      label: "Home Cleaning",
    },
    {
      key: "officeCleaning",
      icon: <Building className="w-5 h-5 mr-2" />,
      label: "Office Cleaning",
    },
    {
      key: "addOnServices",
      icon: <PlusCircle className="w-5 h-5 mr-2" />,
      label: "Add-On Services",
    },
  ];

  return (
    <div className="bg-green-700 min-h-screen py-12 sm:py-16 px-3 sm:px-6 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-orange-500 text-base sm:text-lg font-bold italic mb-1 sm:mb-2 opacity-80">
            Offers & Discounts
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Cleaning Services Price List
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 p-2 rounded-full w-full sm:w-auto flex overflow-x-auto no-scrollbar space-x-2 sm:space-x-3 md:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-white/80 hover:bg-white/20"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price List */}
        <div className="mb-16">
          {activeTab === "homeCleaning" && (
            <PriceListTable services={priceListData.homeCleaning} />
          )}
          {activeTab === "officeCleaning" && (
            <PriceListTable services={priceListData.officeCleaning} />
          )}
          {activeTab === "addOnServices" && (
            <PriceListTable services={priceListData.addOnServices} />
          )}
        </div>

        {/* Discount Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {discountData.map((discount, index) => (
            <DiscountCard key={index} {...discount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersAndDiscounts;
