// LandingPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CarCard from "./CarCard";
import CarModal from "./CarModal";
import FilterBar from "./filter";
import Offers from "./Offers";
import BrandPage from "./BrandPage";
import About from "./About";
import cars from "../data/carData";
import "./landingPage.css";
import ContactUs from "./ContactUs";

// Import hero image from assets
import heroImg from "../assets/hero.webp";

export default function LandingPage() {
  const [filter, setFilter] = useState({ type: "", condition: "" });
  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // Filtering logic
  const filteredCars = cars.filter((car) => {
    const matchesType = filter.type ? car.type === filter.type : true;
    const matchesCondition = filter.condition
      ? car.condition === filter.condition
      : true;
    const matchesSearch = search
      ? car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesType && matchesCondition && matchesSearch;
  });

  return (
    <div className="landing-page">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          position: "relative",
          color: "#fff",
        }}
      >
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            CarBreezy Marketplace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Find your perfect car with filters, offers, and brand pages.
          </motion.p>
        </div>
      </section>


      {/* FILTER BAR */}
      <section id="filter">
      <FilterBar
      filter={filter}
      setFilter={setFilter}
      types={["SUV", "Sedan", "Truck", "Coupe", "Hatchback", "Wagon"]}
      onSearch={setSearch}
      search={search}
      />
      </section>
      
      {/* CAR LIST / GALLERY SECTION */}
      <section id="gallery" className="gallery-section">
        <CarCard cars={filteredCars} onViewDetails={setSelectedCar} />
      </section>
      
      {/* CAR MODAL */}
      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}


      {/* OFFERS SECTION */}
      <section id="offers" className="offers-section">
        <Offers />
      </section>

      {/* BRAND PAGE SECTION */}
      <section id="brand" className="brand-page-section">
        <BrandPage onBrandSelect={(brand) => console.log("Selected:", brand)} />
      </section>


      {/* ABOUT PAGE SECTION */}
      <section id="about" className="about-page-section">
        <About setShowProfile={setShowProfile} />
      </section>

      {/* CONTACT US PAGE SECTION */}
      <section id="contact" className="contact-us-page-section">
        <ContactUs />
      </section>

      
    </div>
  );
}
