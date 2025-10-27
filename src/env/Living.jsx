import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DragDrop.css";

const initialItems = [
  { name: "Dog", type: "living", img: "/src/assets/Dog1.webp" },
  { name: "Cat", type: "living", img: "/src/assets/Cat4.webp" },
  { name: "Tree", type: "living", img: "/src/assets/treee.jpg" },
  { name: "Bird", type: "living", img: "/src/assets/eagle.jpg" },
  { name: "Fish", type: "living", img: "/src/assets/real.webp" },
  { name: "Rock", type: "non-living", img: "/src/assets/rockk.jpg" },
  { name: "Chair", type: "non-living", img: "/src/assets/chair.webp" },
  { name: "Bottle", type: "non-living", img: "/src/assets/bottlee.jpg" },
  { name: "Book", type: "non-living", img: "/src/assets/book.webp" },
  { name: "Pen", type: "non-living", img: "/src/assets/penn.jpg" },
];

export default function Living() {
  const [items, setItems] = useState(initialItems);
  const [livingBin, setLivingBin] = useState([]);
  const [nonLivingBin, setNonLivingBin] = useState([]);
  const [dragItem, setDragItem] = useState(null);

  const handleDragStart = (item) => setDragItem(item);

  const handleDrop = (binType) => {
    if (!dragItem) return;
    if (binType !== dragItem.type) {
      toast.error(`Oops! ${dragItem.name} does not belong here.`, {
        style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "red", secondary: "white" },
        autoClose: 2000,
      });
      return;
    }
    if (binType === "living") setLivingBin([...livingBin, dragItem]);
    else setNonLivingBin([...nonLivingBin, dragItem]);
    const newItems = items.filter((i) => i.name !== dragItem.name);
    setItems(newItems);
    setDragItem(null);

    if (newItems.length === 0) {
      toast.success("🎉 All items sorted correctly!", {
        style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "green", secondary: "white" },
        autoClose: 2000,
      });
    } else {
      toast.success(`✅ ${dragItem.name} placed successfully.`, {
        style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
        iconTheme: { primary: "green", secondary: "white" },
        autoClose: 1200,
      });
    }
  };

  const handleRestart = () => {
    setItems(initialItems);
    setLivingBin([]);
    setNonLivingBin([]);
    toast.info("Game restarted!", {
      style: { backgroundColor: "white", color: "black", fontWeight: "bold" },
      iconTheme: { primary: "blue", secondary: "white" },
    });
  };

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
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dragged = document.querySelector(".dragging-touch");

    if (dragged) dragged.style.display = "none";

    let element = document.elementFromPoint(touch.clientX, touch.clientY);
    while (element && !element.classList.contains("living-bin") && !element.classList.contains("non-living-bin")) {
      element = element.parentElement;
    }

    if (element) {
      if (element.classList.contains("living-bin")) handleDrop("living");
      else if (element.classList.contains("non-living-bin")) handleDrop("non-living");
    }

    if (dragged) {
      dragged.style.display = "";
      dragged.style.position = "";
      dragged.style.left = "";
      dragged.style.top = "";
      dragged.style.zIndex = "";
      dragged.style.transition = "";
      dragged.style.pointerEvents = "";
      dragged.classList.remove("dragging-touch");
    }

    setDragItem(null);
  };

  return (
    <div className="drag-drop-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="title-row1">
        <h2 className="drag-title1">Living vs Non-Living</h2>
        <button className="restart-btn-l" onClick={handleRestart}>🔁 Restart</button>
      </div>
      <p className="instructions">
        Drag and drop each picture into the correct box. Living things can grow,
        move, and breathe — non-living things cannot.
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
            className="draggable-item small-item"
          >
            <img src={item.img} alt={item.name} className="item-image small" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="bins-container">
        <div className="bin living-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("living")}>
          <h3>Living</h3>
          <div className="bin-items">
            {livingBin.map((i) => (
              <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />
            ))}
          </div>
        </div>
        <div className="bin non-living-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("non-living")}>
          <h3>Non-Living</h3>
          <div className="bin-items">
            {nonLivingBin.map((i) => (
              <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
