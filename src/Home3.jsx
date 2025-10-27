import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";
import "./Style3.css";

export default function Home3() {
 
  const clickSoundRef = useRef(new Audio("/src/assets/sounds/click.mp3"));

 
  const handleCardClick = () => {
    const sound = clickSoundRef.current;
    sound.currentTime = 0; 
    sound.play();
  };

  return (
    <>
      <div className="heading9">
        <h2>Grade 3 - 4</h2>
      </div>

      <div className="home-container3">
        <Link to="/art/artactivities" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/class3.jpg" alt="Art" />
          <h3>Creative Activites</h3>
          <p>Draw, paint, and have fun.</p>
        </Link>

        <Link to="/env/enviornment" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/env.jpg" alt="environment" />
          <h3>Science & Environment</h3>
          <p>Nature, Trees, Clean, Green, Earth.</p>
        </Link>

        <Link to="/comp/computer" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/falling.jpg" alt="math" />
          <h3>Fun Focus</h3>
          <p>Let’s play and learn</p>
        </Link>

        <Link to="/exp3/Experiment3" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/exp.jpg" alt="experiments" />
          <h3>Experiments</h3>
          <p>Science is fun to try.</p>
        </Link>

        <Link to="/puzzle/puzzle" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/puzz.jpg" alt="puzzle" />
          <h3>Puzzle</h3>
          <p>Solve, think, match, and win.</p>
        </Link>

        <Link to="/mind/games" className="home-card3" onClick={handleCardClick}>
          <img src="/src/assets/money.jpg" alt="game" />
          <h3>Mind Games</h3>
          <p>Play, learn, laugh, and win</p>
        </Link>
      </div>
    </>
  );
}
