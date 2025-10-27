import { useState } from "react";
import "./Rhyme.css";

export default function Rhyming() {
  const rhymingData = [
    { word1: "Cat", word2: "Hat", img1: "/src/assets/Cat4.webp", img2: "/src/assets/hat.jpg" },
    { word1: "Sun", word2: "Run", img1: "/src/assets/sunn.png", img2: "/src/assets/run.jpg" },
    { word1: "Dog", word2: "Frog", img1: "/src/assets/Dog5.jpg", img2: "/src/assets/frog.jpg" },
    { word1: "Tree", word2: "Bee", img1: "/src/assets/treee.jpg", img2: "/src/assets/beee.jpeg" },
    { word1: "Car", word2: "Star", img1: "/src/assets/car.jpg", img2: "/src/assets/st3.jpg" },
    { word1: "Boat", word2: "Goat", img1: "/src/assets/boat.jpg", img2: "/src/assets/goat.jpg" },
    { word1: "Fox", word2: "Box", img1: "/src/assets/fox.jpg", img2: "/src/assets/box.jpg" },
    { word1: "Mouse", word2: "House", img1: "/src/assets/mousee.jpeg", img2: "/src/assets/house.jpg" },
    { word1: "Rain", word2: "Train", img1: "/src/assets/rainn.jpg", img2: "/src/assets/train.jpg" },
    { word1: "Chair", word2: "Bear", img1: "/src/assets/chair.webp", img2: "/src/assets/Brown2.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const current = rhymingData[index];

  const nextWord = () => setIndex((index + 1) % rhymingData.length);
  const prevWord = () => setIndex((index - 1 + rhymingData.length) % rhymingData.length);

  const speakWords = () => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${current.word1} rhymes with ${current.word2}`);
    utterance.lang = "en-US";
    utterance.rate = 0.6;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="rhyming-container">
      <div className="header-row">
        <h2>🎵 Rhyming Words</h2>
        <button className="play-button" onClick={speakWords}>
          🔊 Say It
        </button>
      </div>

      <div className="rhyming-card">
        <div className="images">
          <div className="image-item">
            <img src={current.img1} alt={current.word1} />
            <p>{current.word1}</p>
          </div>
          <span className="rhymes-with">rhymes with</span>
          <div className="image-item">
            <img src={current.img2} alt={current.word2} />
            <p>{current.word2}</p>
          </div>
        </div>

        <div className="navigation">
          <button onClick={prevWord}>⟵ Previous</button>
          <button onClick={nextWord}>Next ⟶</button>
        </div>
      </div>
    </div>
  );
}
