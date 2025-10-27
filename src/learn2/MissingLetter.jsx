import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Missingletter.css";

export default function MissingLetter() {
  const data = [
    { word: "CAT", missing: 1, image: "/src/assets/cat.jpg" },
    { word: "BALL", missing: 2, image: "/src/assets/ba.jpg" },
    { word: "BIRD", missing: 1, image: "/src/assets/birds1.webp" },
    { word: "FISH", missing: 2, image: "/src/assets/fishwater.jpg" },
    { word: "TREE", missing: 3, image: "/src/assets/tree-cool.webp" },
    { word: "SUN", missing: 1, image: "/src/assets/sunn.png" },
    { word: "LION", missing: 2, image: "/src/assets/lion.jpg" },
    { word: "DUCK", missing: 3, image: "/src/assets/duck4.jpg" },
    { word: "FROG", missing: 2, image: "/src/assets/frog.jpg" },
    { word: "SHIP", missing: 1, image: "/src/assets/boat.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const current = data[index];
  const missingLetter = current.word[current.missing];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleClick = useCallback(
    (letter) => {
      if (letter === missingLetter) {
        toast.success("🎉 Great job! That’s correct!", { autoClose: 1200 });
        setShowNext(true);
      } else {
        toast.error("❌ Try again!", { autoClose: 1200 });
      }
    },
    [missingLetter]
  );

  const nextWord = useCallback(() => {
    setIndex((index + 1) % data.length);
    setShowNext(false);
  }, [index]);

  const handleRestart = () => {
    setIndex(0);
    setShowNext(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const letter = e.key.toUpperCase();
      if (alphabet.includes(letter) && !showNext) {
        handleClick(letter);
      } else if (e.key === "Enter" && showNext) {
        nextWord();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleClick, nextWord, showNext]);

  const displayWord = current.word
    .split("")
    .map((ch, i) => (i === current.missing ? "_" : ch))
    .join(" ");

  return (
    <div className="missing-letter-container">

      <div className="header-roww">
        <h2>Find the Missing Letter!</h2>
        <button className="restart-btn-m" onClick={handleRestart}>
          🔄 Restart
        </button>
      </div>

      <p className="game-instructions">
        Guess the missing letter in the word by clicking a letter below or pressing a key.
      </p>

      <div className="word-image-section">
        <div className="word-box">{displayWord}</div>
        <div className="image-section">
          <img src={current.image} alt="object" />
        </div>
      </div>

      <div className="letters-grid">
        {alphabet.map((letter) => (
          <button key={letter} onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      {showNext && (
        <button className="next-btn" onClick={nextWord}>
          Next Word ➜
        </button>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
}
