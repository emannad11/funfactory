import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Drawing2.css";

export default function Drawing2() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const drawings = [
    { name: "Apple", img: "/src/assets/outline1.jpg" },
    { name: "Cat", img: "/src/assets/outline2.jpg" },
    { name: "House", img: "/src/assets/outline3.jpg" },
    { name: "Car", img: "/src/assets/outline4.jpg" },
    { name: "Fish", img: "/src/assets/outline5.jpg" },
    { name: "Bird", img: "/src/assets/outline6.jpg" },
    { name: "Balloon", img: "/src/assets/outline7.jpg" },
    { name: "Icecream", img: "/src/assets/outline8.jpg" },
  ];

  const handleSelect = (item, index) => {
    setSelectedIndex(index); 
    navigate(`/drawing2/${item.name.toLowerCase()}`, { state: item });
  };

  return (
    <div className="drawing-selection">
      <h2>🎨 Select a Drawing</h2>
      <div className="drawing-grid">
        {drawings.map((item, i) => (
          <div
            key={i}
            className={`drawing-card ${selectedIndex === i ? "selected" : ""}`}
            onClick={() => handleSelect(item, i)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
