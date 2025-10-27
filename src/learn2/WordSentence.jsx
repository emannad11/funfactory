import { useState } from "react";
import "./WordSentence.css";

export default function WordSentence() {
  const sentencesData = [
    { word: "Cat", sentence: "The cat is sleeping.", img: "/src/assets/Cat3.jpg" },
    { word: "Dog", sentence: "The dog runs fast.", img: "/src/assets/Dog2.jpg" },
    { word: "Ball", sentence: "I have a red ball.", img: "/src/assets/redball.webp" },
    { word: "Sun", sentence: "The sun is shining.", img: "/src/assets/sunn.png" },
    { word: "Apple", sentence: "An apple is red.", img: "/src/assets/Apple.jpeg" },
    { word: "Fish", sentence: "The fish swims in water.", img: "/src/assets/fish.jpg" },
    { word: "Bird", sentence: "The bird can fly.", img: "/src/assets/birds1.webp" },
    { word: "Lion", sentence: "The lion is the king of the jungle.", img: "/src/assets/lion.jpg" },
    { word: "Tree", sentence: "A tree gives us shade.", img: "/src/assets/treee.jpg" },
    { word: "Car", sentence: "The car is very fast.", img: "/src/assets/carr.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = sentencesData[currentIndex];

  const playSentence = (sentence) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="sentences-container">
      <h2>Word Sentences</h2>

      <div className="sentences-card">
        <div className="image">
          <img src={current.img} alt={current.word} />
        </div>

        <div className="text-section">
          <div className="word">{current.word}</div>
          <div className="sentence">"{current.sentence}"</div>

          <button className="play-button" onClick={() => playSentence(current.sentence)}>
            🔊 Hear Sentence
          </button>

          <div className="navigation">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + sentencesData.length) % sentencesData.length
                )
              }
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % sentencesData.length)
              }
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
