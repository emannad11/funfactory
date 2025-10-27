import { Link } from "react-router-dom";
import "./Art.css";

export default function ArtActivities() {
  const card = [
    {
      id: 1,
      title: "Paper Craft",
      img: "/src/assets/craft.jpg",
      path: "/art/craft",
    },
    {
      id: 2,
      title: "Nature Craft",
      img: "/src/assets/paint.jpg",
      path: "/art/nature",
    },
  ];

  const speakLetter = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
    <div className="heading"> <h2>Creative Activites</h2></div>
    <div className="container-cards">
      {card.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          className="card-cards"
          onClick={() => speakLetter(card.title)}
        >
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
        </Link>
      ))}
    </div>
    </>
  );
}
