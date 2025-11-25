import React from "react";
import "./NewCars.css";

const newCars = [
  {
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    type: "Sedan",
    price: "$420",
    year: 2024,
    horsepower: 203,
    acceleration: "7.9s 0-60 mph",
    topSpeed: "135 mph",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=5008&auto=format&fit=crop&q=60",
    description:
      "Reliable midsize sedan with excellent fuel economy and advanced safety",
  },
  {
    id: 2,
    name: "Toyota RAV4",
    brand: "Toyota",
    type: "SUV",
    price: "$28,275",
    year: 2024,
    horsepower: 203,
    acceleration: "8.0s 0-60 mph",
    topSpeed: "130 mph",
    image: "https://images.unsplash.com/photo-1580273916550-e323bezae537?w=5008&auto=format&fit=crop&q=60",
    description:
      "Best-selling compact SUV with available hybrid powertrain and all-wheel drive",
  },
  {
    id: 3,
    name: "Toyota Supra",
    brand: "Toyota",
    type: "Sports",
    price: "$44,540",
    year: 2024,
    horsepower: 382,
    acceleration: "3.9s 0-60 mph",
    topSpeed: "155 mph",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=5008&auto=format&fit=crop&q=60",
    description:
      "Legendary sports car with BMW engineering, precise handling and thrilling performance",
  },
  {
    id: 4,
    name: "Toyota Tacoma",
    brand: "Toyota",
    type: "Truck",
    price: "$28,750",
    year: 2024,
    horsepower: 278,
    acceleration: "7.7s 0-60 mph",
    topSpeed: "115 mph",
    image: "https://images.unsplash.com/photo-1580273916550-e323bezae537?w=500&auto=format&fit=crop&q=60",
    description:
      "Rugged midsize pickup truck with exceptional off-road capability and durability",
  },
  {
    id: 5,
    name: "Nissan Altima",
    brand: "Nissan",
    type: "Sedan",
    price: "$25,730",
    year: 2024,
    horsepower: 188,
    acceleration: "7.3s 0-60 mph",
    topSpeed: "130 mph",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=5008&auto=format&fit=crop&q=60",
    description:
      "Comfortable midsize sedan with available all-wheel drive and premium interior",
  },
  {
    id: 6,
    name: "Nissan Rogue",
    brand: "Nissan",
    type: "SUV",
    price: "$28,360",
    year: 2024,
    horsepower: 201,
    acceleration: "8.1s 0-60 mph",
    topSpeed: "125 mph",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=5008&auto=format&fit=crop&q=60",
    description:
      "Versatile compact SUV with innovative ProPILOT Assist and spacious cabin",
  },
  {
    id: 7,
    name: "Nissan GT-R",
    brand: "Nissan",
    type: "Supercar",
    price: "$120,910",
    year: 2024,
    horsepower: 565,
    acceleration: "2.9s 0-60 mph",
    topSpeed: "196 mph",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&auto=format&fit=crop&q=60",
    description:
      "Iconic supercar known as Godzilla, with all-wheel drive and brutal acceleration",
  },
  {
    id: 8,
    name: "Nissan Z",
    brand: "Nissan",
    type: "Sports",
    price: "$41,015",
    year: 2024,
    horsepower: 400,
    acceleration: "4.3s 0-60 mph",
    topSpeed: "155 mph",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=5008&auto=format&fit=crop&q=60",
    description:
      "Modern sports car paying homage to classic Z-cars with twin-turbo V6 power",
  },
  {
    id: 9,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    type: "Luxury",
    price: "$45,300",
    year: 2024,
    horsepower: 255,
    acceleration: "6.0s 0-60 mph",
    topSpeed: "130 mph",
    image: "https://images.unsplash.com/photo-1563720223485-40f7d0b26265?w=5008&auto=format&fit=crop&q=60",
    description:
      "Entry-level luxury sedan with S-Class inspired design and advanced safety features",
  },
  {
    id: 10,
    name: "Mercedes E-Class",
    brand: "Mercedes",
    type: "Luxury",
    price: "$57,300",
    year: 2024,
    horsepower: 255,
    acceleration: "5.9s 0-60 mph",
    topSpeed: "130 mph",
    image:
      "https://images.unsplash.com/photo-1563720223485-40f7d0b262b5?w=5008&auto=format&fit=crop&q=60",
    description:
      "Executive luxury sedan balancing comfort, technology, and smooth performance",
  },
  {
    id: 11,
    name: "Mercedes S-Class",
    brand: "Mercedes",
    type: "Luxury",
    price: "$114,500",
    year: 2024,
    horsepower: 496,
    acceleration: "4.4s 0-60 mph",
    topSpeed: "155 mph",
    image: "https://images.unsplash.com/photo-1563720223485-40f7d0b26265?w=5008&auto=format&fit=crop&q=60",
    description:
      "Flagship luxury sedan representing the pinnacle of automotive innovation and comfort",
  },
  {
    id: 12,
    name: "Mercedes GLE",
    brand: "Mercedes",
    type: "Luxury SUV",
    price: "$58,500",
    year: 2024,
    horsepower: 255,
    acceleration: "7.0s 0-60 mph",
    topSpeed: "130 mph",
    image: "https://images.unsplash.com/photo-1563720223485-40f7d0b26265?w=5008&auto=format&fit=crop&q=60",
    description:
      "Premium midsize SUV combining luxury, technology, and versatile practicality",
  },
  {
    id: 13,
    name: "Tesla Model 3",
    brand: "Tesla",
    type: "Electric",
    price: "$40,240",
    year: 2024,
    horsepower: 283,
    acceleration: "5.8s 0-60 mph",
    topSpeed: "140 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=5008&auto=format&fit=crop&q=60",
    description:
      "Compact electric sedan offering impressive range and cutting-edge technology",
  },
  {
    id: 14,
    name: "Tesla Model Y",
    brand: "Tesla",
    type: "Electric SUV",
    price: "$44,990",
    year: 2024,
    horsepower: 384,
    acceleration: "4.8s 0-60 mph",
    topSpeed: "135 mph",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&auto=format&fit=crop&q=60",
    description:
      "Compact electric SUV with versatile interior and exceptional handling",
  },
  {
    id: 15,
    name: "Tesla Model S",
    brand: "Tesla",
    type: "Electric",
    price: "$74,990",
    year: 2024,
    horsepower: 670,
    acceleration: "3.1s 0-60 mph",
    topSpeed: "N/A",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=5008&auto=format&fit=crop&q=60",
    description: "High-performance electric luxury sedan",
  },
];

  export default function NewCars() {
  return (
    <div className="newcars-section">
      <h2 className="newcars-title">🔥 New Cars</h2>

      <div className="newcars-grid">
        {newCars.map((car) => (
          <div key={car.id} className="newcars-card">
            <div className="newcars-img-box">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="newcars-info">
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>

              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}