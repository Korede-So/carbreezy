import React, { useState } from "react";
import "./CarModal.css";

function CarModal({ car, onClose }) {
  const [activeTab, setActiveTab] = useState("internal");
  const [showPopup, setShowPopup] = useState(false);

  const handleBuy = () => {
    setShowPopup(true);
    // Optionally, you could also close the modal after purchase
    // onClose();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <h2>{car.title}</h2>
          <i className="ri-close-circle-line" onClick={onClose}></i>
        </div>

        <div className="content-section">
          <img src={car.images} alt={car.title} />
          <div className="price-description">
            <h3>{car.price}</h3>
            <p>{car.specs[activeTab]}</p>
          </div>
        </div>

        <div className="tabs">
          <button
            className={activeTab === "internal" ? "active" : ""}
            onClick={() => setActiveTab("internal")}
          >
            Internal Specification
          </button>
          <button
            className={activeTab === "external" ? "active" : ""}
            onClick={() => setActiveTab("external")}
          >
            External Specification
          </button>
          <button
            className={activeTab === "engine" ? "active" : ""}
            onClick={() => setActiveTab("engine")}
          >
            Engine
          </button>
          <button
            className={activeTab === "dimension" ? "active" : ""}
            onClick={() => setActiveTab("dimension")}
          >
            Dimensions
          </button>
        </div>

        <div className="cta-btn">
          <button onClick={handleBuy}>Buy Now</button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>✅ Purchase Successful</h3>
              <p>You have successfully bought the car.</p>
              <p>Thank you for dealing with Carbreezy!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarModal;
