// CarCard.jsx
import React, { useState } from "react";
import "./CarCard.css";
import CarModal from "./CarModal";

export default function CarCard({ cars }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpen = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="carbreezy-list">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} onOpen={handleOpen} />
      ))}

      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}

function CarItem({ car, onOpen }) {
  return (
    <div className="carbreezy-card" onClick={() => onOpen(car)} role="button">
      <img src={car.images} alt={car.title} className="carbreezy-card-img" />

      <div className="carbreezy-body">
        <div className="carbreezy-left">
          <div className="carbreezy-title">{car.title}</div>
          <div className="carbreezy-sub">
            {car.brand} • {car.type} •{" "}
            <span className="carbreezy-condition">{car.condition}</span>
          </div>
        </div>

        <div className="carbreezy-right">
          <div className="carbreezy-price">{car.price}</div>
          <div className="carbreezy-status">Available</div>
        </div>
      </div>
    </div>
  );
}
