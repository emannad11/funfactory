import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DragDrop.css";

const recycleItems = [
  { name: "Plastic Bottle", bin: "Recycle", img: "/src/assets/bottlee.jpg" },
  { name: "Banana Peel", bin: "Compost", img: "/src/assets/peel.avif" },
  { name: "Paper", bin: "Recycle", img: "/src/assets/paper3.webp" },
  { name: "Glass Jar", bin: "Recycle", img: "/src/assets/jarr.jpg" },
  { name: "Food Scraps", bin: "Compost", img: "/src/assets/scraps.jpg" },
  { name: "Old Shirt", bin: "Reuse", img: "/src/assets/old.avif" },
  { name: "Newspaper", bin: "Recycle", img: "/src/assets/newspaper.jpg" },
  { name: "Apple Core", bin: "Compost", img: "/src/assets/apple-core.jpg" },
  { name: "Broken Toy", bin: "Reuse", img: "/src/assets/brokentoy.webp" },
  { name: "Cardboard Box", bin: "Recycle", img: "/src/assets/cardboard.jpg" },
];

export default function Recycle() {
  const [RecycleBin, setRecycleBin] = useState([]);
  const [ReuseBin, setReuseBin] = useState([]);
  const [CompostBin, setCompostBin] = useState([]);
  const [dragItem, setDragItem] = useState(null);
  const [items, setItems] = useState([...recycleItems]);

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
    while (element && !element.classList.contains("recycle-bin") && !element.classList.contains("reuse-bin") && !element.classList.contains("compost-bin")) {
      element = element.parentElement;
    }

    if (element) {
      if (element.classList.contains("recycle-bin")) handleDrop("Recycle");
      else if (element.classList.contains("reuse-bin")) handleDrop("Reuse");
      else if (element.classList.contains("compost-bin")) handleDrop("Compost");
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
    const correctBin = dragItem.bin.trim().toLowerCase();
    const droppedBin = binType.trim().toLowerCase();
    if (correctBin === droppedBin) {
      if (binType === "Recycle") setRecycleBin([...RecycleBin, dragItem]);
      else if (binType === "Reuse") setReuseBin([...ReuseBin, dragItem]);
      else if (binType === "Compost") setCompostBin([...CompostBin, dragItem]);

      setItems(items.filter((i) => i.name !== dragItem.name));
      toast.success(`✅ ${dragItem.name} sorted correctly!`, { className: "white-toast", autoClose: 1500 });
    } else {
      toast.error(`❌ ${dragItem.name} does not belong here.`, { className: "white-toast", autoClose: 1500 });
    }
    setDragItem(null);
  };

  const handleRestart = () => {
    setRecycleBin([]);
    setReuseBin([]);
    setCompostBin([]);
    setItems([...recycleItems]);
    toast.info("♻️ Game restarted!", { className: "white-toast", autoClose: 1500 });
  };

  return (
    <div className="drag-drop-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="title-row1">
        <h2 className="drag-title1">♻️ Recycle Sorting Game</h2>
        <button className="restart-btn-l" onClick={handleRestart}>🔁 Restart</button>
      </div>
      <p className="instructions">
        Drag or tap each item into the correct bin: ♻️ <b>Recycle</b>, 🔄 <b>Reuse</b>, 🌱 <b>Compost</b>
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
        <div className="bin recycle-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Recycle")}>
          <h3>Recycle</h3>
          <div className="bin-items">{RecycleBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
        <div className="bin reuse-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Reuse")}>
          <h3>Reuse</h3>
          <div className="bin-items">{ReuseBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
        <div className="bin compost-bin" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("Compost")}>
          <h3>Compost</h3>
          <div className="bin-items">{CompostBin.map((i) => <img key={i.name} src={i.img} alt={i.name} className="item-image-bin small" />)}</div>
        </div>
      </div>
    </div>
  );
}
