import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import "./Style3.css";

export default function Home4() {
  
  const clickSoundRef = useRef(new Audio("/src/assets/sounds/click.mp3"));

  
  const handleCardClick = () => {
    const sound = clickSoundRef.current;
    sound.currentTime = 0;
    sound.play();
  };

  return (
    <>
      <div className="heading9">
        <h2>Grade 5 - 6</h2>
      </div>

      <div className="home-container3">
        <Link to="/cards" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/braint.jpg" alt="Brain Teaser" />
          <h3>Brain Teasers</h3>
          <p>Test your brain.</p>
        </Link>

        <Link to="/speak" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/speak.jpg" alt="environment" />
          <h3>Speak & Share</h3>
          <p>Speak and Share</p>
        </Link>

        <Link to="/story5/entertainment" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/enter.jpg" alt="math" />
          <h3>Entertainment</h3>
          <p>Imagination blooms here</p>
        </Link>

        <Link to="/world/culture" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/culture.jpg" alt="experiments" />
          <h3>World of Cultures</h3>
          <p>Let's learn about our culture.</p>
        </Link>

        <Link to="/maze/exp4" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/treasure.jpg" alt="puzzle" />
          <h3>Seedling Society</h3>
          <p>Let's plant for the Planet</p>
        </Link>

        <Link to="/digital/play" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/digital.jpg" alt="game" />
          <h3>Grid & Find</h3>
          <p>Play, laugh, and win</p>
        </Link>
      </div>
    </>
  );
}
