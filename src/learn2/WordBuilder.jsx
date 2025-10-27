import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./WordBuilder.css";

const correctSound = new Audio("/src/assets/sounds/correct.mp3");
const wrongSound = new Audio("/src/assets/sounds/no.mp3");

export default function WordBuilder() {
  const navigate = useNavigate();

  const words = [
    { word: "CAT", options: ["C", "B", "T", "A", "D"], img: "/src/assets/Cat2.jpg" },
    { word: "DOG", options: ["D", "I", "G", "H", "O"], img: "/src/assets/Dog3.webp" },
    { word: "SUN", options: ["S", "M", "N", "U", "P"], img: "/src/assets/sunn.png" },
    { word: "HEN", options: ["H", "N", "E", "L", "K"], img: "/src/assets/hen5.jpg" },
    { word: "BEE", options: ["E", "E", "B", "C", "D"], img: "/src/assets/beee.jpeg" },
    { word: "CAR", options: ["C", "A", "B", "D", "R"], img: "/src/assets/car.jpg" },
    { word: "BOX", options: ["B", "O", "X", "C", "D"], img: "/src/assets/box.jpg" },
    { word: "HAT", options: ["H", "C", "T", "A", "I"], img: "/src/assets/hat.jpg" },
    { word: "BAG", options: ["B", "A", "G", "C", "D"], img: "/src/assets/bag.webp" },
    { word: "FOX", options: ["F", "J", "X", "O", "H"], img: "/src/assets/fox.jpg" },
    { word: "JAR", options: ["J", "A", "R", "K", "L"], img: "/src/assets/jar.avif" },
    { word: "PEN", options: ["P", "E", "N", "C", "D"], img: "/src/assets/pen.webp" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [builtWord, setBuiltWord] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentWord = words[currentWordIndex];

  const handleLetter = (letter) => {
    const letterUtterance = new SpeechSynthesisUtterance(letter);
    speechSynthesis.speak(letterUtterance);

    const nextWord = builtWord + letter;
    setBuiltWord(nextWord);

    if (nextWord.length === currentWord.word.length) {
      setTimeout(() => {
        if (nextWord === currentWord.word) {
          correctSound.currentTime = 0;
          correctSound.play().catch(() => {});
          toast.success("Correct! 🎉", { autoClose: 1200 });
          setScore((prev) => prev + 1);
          if (currentWordIndex + 1 < words.length) {
            setTimeout(() => {
              setBuiltWord("");
              setCurrentWordIndex((prev) => prev + 1);
            }, 1000);
          } else {
            setFinished(true);
          }
        } else {
          wrongSound.currentTime = 0;
          wrongSound.play().catch(() => {});
          toast.error("Try Again ❌", { autoClose: 1200 });
          setBuiltWord("");
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toUpperCase();
      if (!finished && currentWord.options.includes(key)) handleLetter(key);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [builtWord, currentWordIndex, finished]);

  const restartGame = () => {
    setCurrentWordIndex(0);
    setBuiltWord("");
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="word-builder-container">
        <h2>Well Done! 🎉</h2>
        <p className="score-text">
          Your score: {score} / {words.length}
        </p>
        <div className="button-row">
          <button className="back-btnnn" onClick={restartGame}>
            🔄 Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="word-builder-container">
      <div className="header-row">
        <h2>Build the Word!</h2>
        <div className="button-row">
          <button className="back-btnnn" onClick={restartGame}>
            🔄 Restart
          </button>
        </div>
      </div>

      <p className="instructionss">
        Click the letters to build the word according to the image.
      </p>

      <div className="word-image">
        <img src={currentWord.img} alt={currentWord.word} />
      </div>

      <div className="built-word">
        {builtWord.split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </div>

      <div className="options">
        {currentWord.options.map((letter, index) => (
          <button key={index} onClick={() => handleLetter(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
