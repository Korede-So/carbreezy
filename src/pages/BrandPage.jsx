import React from "react";
import { motion } from "framer-motion";
import "./brandPage.css";

// Import images from assets
import toyotaImg from "../assets/toyota.jpg";
import teslaImg from "../assets/tesla.jpg";
import nissanImg from "../assets/nissan.jpg";
import benzImg from "../assets/benz.jpg";
import hondaImg from "../assets/honda.jpg";
import lexusImg from "../assets/lexus.jpg";
import chevroletImg from "../assets/chevrolet.jpg";
import fordImg from "../assets/ford.jpg";

export default function BrandPage({ onBrandSelect }) {
  const brands = [
    { name: "", img: toyotaImg },
    { name: "", img: teslaImg },
    { name: "", img: nissanImg },
    { name: "MERCEDES", img: benzImg },
    { name: "HONDA", img: hondaImg },
    { name: "LEXUS", img: lexusImg },
    { name: "CHEVROLET", img: chevroletImg },
    { name: "FORD", img: fordImg },

  ];

  return (
    <div className="brand-page">
      {/* Category Bar */}
      <div className="category-header">
        <div className="category-title">CATEGORIES</div>
        <div className="category-options">
          <span className="selected">Brand</span>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="brand-title">Cars by Brand</h1>
      <p className="brand-subtitle">The available car brands.</p>

      {/* Brand Grid */}
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="brand-card"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBrandSelect(brand.name)}
          >
            <motion.img
              src={brand.img}
              alt={brand.name}
              className="brand-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
            <h3>{brand.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
