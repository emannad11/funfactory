import { Link } from "react-router-dom";
export default function Quiz() {
const cards = [
    {
      id: 1,
      title: "Alphabets",
      img: "/src/assets/alpha1.jpg",
       path: "/quiz/alphabets",
    },
    {
      id: 2,
      title: "Animals",
      img: "/src/assets/animal1.jpg",
      path: "/quiz/animals",
    },
    {
      id: 3,
      title: "Birds",
      img: "/src/assets/birds2.jpg",
      path: "/quiz/birds",
    },
    {
      id: 4,
      title: "Colors",
      img: "/src/assets/colors.png",
      path: "/quiz/colors",
    },
    {
      id: 5,
      title: "Counting",
      img: "/src/assets/count.jpg",
      path: "/quiz/counting",
    },
    {
      id: 6,
      title: "Fruits",
      img: "/src/assets/fruitss.png",
      path: "/quiz/fruits",
    },
     {
      id: 7,
      title: "Shapes",
      img: "/src/assets/shapes.jpg",
      path: "/quiz/shapes",
    },
     {
      id: 8,
      title: "Vegetables",
      img: "/src/assets/vege.jpg",
      path: "/quiz/vegetables",
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
    <div className="heading9"><h2>Quiz</h2></div>
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
 
