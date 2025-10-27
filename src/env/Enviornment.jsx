import { Link } from "react-router-dom";
import "./Env.css";

export default function Environment() {
  const card = [
    {
      id: 1,
      title: "Living vs Non-Living Sort",
      img: "/src/assets/living.jpg",
      path: "/env/livingnonliving",
    },
    {
      id: 2,
      title: "Reduce–Reuse–Recycle",
      img: "/src/assets/recycle.jpg",
      path: "/env/recycle",
    },
    {
      id: 3,
      title: "Weather Match",
      img: "/src/assets/weather.jpg",
      path: "/env/weather",
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
    <div className="heading3"> <h2>Science & Enviornment</h2></div>
    <div className="container-cards44">
      {card.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          className="card-cards44"
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
