import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DragDrop.css";

const weatherItems = [
  { name: "Umbrella", type: "Rainy", img: "/src/assets/umb.avif" },
  { name: "Raincoat", type: "Rainy", img: "/src/assets/coat.jpeg" },
  { name: "Boots", type: "Rainy", img: "/src/assets/boots.jpg" },
  { name: "Puddle", type: "Rainy", img: "/src/assets/puddle.jpeg" },
  { name: "Boat", type: "Rainy", img: "/src/assets/boat.jpg" },
  { name: "Glasses", type: "Sunny", img: "/src/assets/sunglasses.jpg" },
  { name: "Shorts", type: "Sunny", img: "/src/assets/shorts.jpeg" },
  { name: "Hat", type: "Sunny", img: "/src/assets/hat.jpg" },
  { name: "Juice", type: "Sunny", img: "/src/assets/ice.jpg" },
  { name: "Sunscreen", type: "Sunny", img: "/src/assets/sunscreen.jpg" },
];

export default function Weather() {
  const [sunnyBin, setSunnyBin] = useState([]);
  const [rainyBin, setRainyBin] = useState([]);
  const [items, setItems] = useState([...weatherItems]);
  const [dragItem, setDragItem] = useState(null);

  const handleDragStart = (item) => setDragItem(item);

  const handleTouchStart = (e, item) => {
    setDragItem(item);
    e.currentTarget.classList.add("dragging-touch");
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const dragged = document.querySelector(".dragging-touch");
    if (dragged) {
      dragged.style.position = "fixed";
      dragged.style.left = `${touch.clientX - dragged.offsetWidth / 2}px`;
      dragged.style.top = `${touch.clientY - dragged.offsetHeight / 2}px`;
      dragged.style.zIndex = 1000;
      dragged.style.transition = "none";
      dragged.style.pointerEvents = "none";
      dragged.style.opacity = 0.8;
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dragged = document.querySelector(".dragging-touch");
    if (dragged) dragged.style.display = "none";

    let element = document.elementFromPoint(touch.clientX, touch.clientY);
    while (element && !element.classList.contains("sunny-bin") && !element.classList.contains("rainy-bin")) {
      element = element.parentElement;
    }

    if (element) {
      if (element.classList.contains("sunny-bin")) handleDrop("Sunny");
      else if (element.classList.contains("rainy-bin")) handleDrop("Rainy");
    }

    if (dragged) {
      dragged.style.display = "";
      dragged.style.position = "";
      dragged.style.left = "";
      dragged.style.top = "";
      dragged.style.zIndex = "";
      dragged.style.transition = "";
      dragged.style.pointerEvents = "";
      dragged.style.opacity = "";
      dragged.classList.remove("dragging-touch");
    }
    setDragItem(null);
  };

  const handleDrop = (binType) => {
    if (!dragItem) return;

    const correctType = dragItem.type.trim().toLowerCase();
    const droppedType = binType.trim().toLowerCase();

    if (correctType === droppedType) {
      if (binType === "Sunny") setSunnyBin([...sunnyBin, dragItem]);
      else if (binType === "Rainy") setRainyBin([...rainyBin, dragItem]);

      setItems(items.filter((i) => i.name !== dragItem.name));

      toast.success(`✅ ${dragItem.name} placed correctly!`, {
        className: "white-toast",
        autoClose: 1500,
      });

      if (items.length - 1 === 0) {
        toast.success("🎉 All items sorted correctly!", {
          className: "white-toast",
          autoClose: 2500,
        });
      }
    } else {
      toast.error(`❌ ${dragItem.name} doesn’t belong here.`, {
        className: "white-toast",
        autoClose: 1500,
      });
    }
    setDragItem(null);
  };

  const handleRestart = () => {
    setSunnyBin([]);
    setRainyBin([]);
    setItems([...weatherItems]);
    toast.info("🌦️ Game restarted!", { className: "white-toast", autoClose: 1500 });
  };

  return (
    <div className="drag-drop-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="title-row1">
        <h2 className="drag-title1">🌦️ Weather Match Game</h2>
        <button className="restart-btn-l" onClick={handleRestart}>🔁 Restart</button>
      </div>
      <p className="instructions">
        Drag or tap each item into the correct weather bin — ☀️ <b>Sunny</b> for hot days, 🌧️ <b>Rainy</b> for wet days.
      </p>

      <div className="items-container-row">
        {items.map((item) => (
          <div
            key={item.name}
            draggable
            onDragStart={() => handleDragStart(item)}
            onTouchStart={(e) => handleTouchStart(e, item)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="draggable-item"
          >
            <img src={item.img} alt={item.name} className="item-image small" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="bins-container">
        <div className="bin sunny-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Sunny")}>
          <h3>☀️ Sunny</h3>
          <div className="bin-items">{sunnyBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>

        <div className="bin rainy-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Rainy")}>
          <h3>🌧️ Rainy</h3>
          <div className="bin-items">{rainyBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
      </div>
    </div>
  );
}
