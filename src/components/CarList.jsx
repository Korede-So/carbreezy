import React, { useState } from "react";
import carData from "../data/carData";
import "./CarList.css";

function CarCard({ car }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-content">
        <div className="car-header">
          <h3 className="car-name">{car.name}</h3>
          <span className="car-price">{car.price}</span>
        </div>

        <p className="car-brand">{car.brand} • {car.year}</p>

        <div className="car-specs">
          <div className="spec">
            <span className="spec-label">Horsepower</span>
            <span className="spec-value">{car.horsepower} HP</span>
          </div>
          <div className="spec">
            <span className="spec-label">Acceleration</span>
            <span className="spec-value">{car.speed}</span>
          </div>
        </div>

        <p className="car-description">
          {isExpanded
            ? car.description
            : `${car.description.substring(0, 80)}...`}
        </p>

        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        <div className="car-actions">
          <button className="btn-primary">View Details</button>
          <button className="btn-secondary">Save to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default function CarList({ filterBrand }) {
  const filteredCars = filterBrand
    ? carData.filter((car) => car.brand === filterBrand)
    : carData;

  return (
    <div className="car-list">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
