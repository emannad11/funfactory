import "./Style.css";
import { Link } from "react-router-dom";
export default function Learning() {
  const cards = [
       {
      id: 1,
      title: "Alphabets",
      img: "/src/assets/abc.webp",
       path: "/learn/alphabet",
    },
    {
      id: 2,
      title: "Animals",
      img: "/src/assets/animal.jpg",
      path: "/learn/animal",
    },
    {
      id: 3,
      title: "Birds",
      img: "/src/assets/birds.avif",
      path: "/learn/bird",
    },
    {
      id: 4,
      title: "Colors",
      img: "/src/assets/color.jpg",
      path: "/learn/color",
    },
    {
      id: 5,
      title: "Counting",
      img: "/src/assets/counting.webp",
      path: "/learn/count",
    },
    {
      id: 6,
      title: "Fruits",
      img: "/src/assets/fruits.jpg",
      path: "/learn/fruit",
    },
     {
      id: 7,
      title: "Shapes",
      img: "/src/assets/shape.png",
      path: "/learn/shape",
    },
     {
      id: 8,
      title: "Vegetables",
      img: "/src/assets/vegetable.jpg",
      path: "/learn/vegetable",
    },
    
  ];
    const speakLetter= (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";  
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };
  return (
    <>
    <div className="heading9"><h2>Learning</h2></div>
       <div className="containerlearn">
      {cards.map((card) => (
        <Link key={card.id} to={card.path} className="cardlearn" onClick={() => speakLetter(card.title)} >
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
        </Link>
      ))}
    </div>
    </>
  );
}
 
