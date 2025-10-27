import { Link } from "react-router-dom";
import { useRef } from "react";
import "./App.css";

export default function Home2() {
  
  const clickSound = useRef(new Audio("/src/assets/sounds/click.mp3"));


  const handleCardClick = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  return (
    <>
      <div className="heading9"><h2>Grade 1 - 2</h2></div>
      <div className="home-container">

        <Link to="/learning1-2" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR3.jpg" alt="Learning" />
          <h3>Learning</h3>
          <p>Explore fun lessons for kids.</p>
        </Link>

        <Link to="/phonics/Phonics" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR6.jpg" alt="Phonics" />
          <h3>Phonics-(accent)</h3>
          <p>Smart kids love to learn</p>
        </Link>

        <Link to="/shortstories/ShortStories" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR2.jpg" alt="stories" />
          <h3>Short Stories</h3>
          <p>Stories teach manners.</p>
        </Link>

        <Link to="/exp2/Experiment2" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR7.jpg" alt="experiments" />
          <h3>Experiments</h3>
          <p>Science is fun to try.</p>
        </Link>

        <Link to="/math/mathmagic" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR8.jpg" alt="Math" />
          <h3>Math Magic</h3>
          <p>Explore the world of Math.</p>
        </Link>

        <Link to="/drawing2/draw2" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR1.jpg" alt="drawing" />
          <h3>Drawing</h3>
          <p>Draw, paint, and have fun.</p>
        </Link>

        <Link to="/manner/manners" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/manners.jpg" alt="manners" />
          <h3>Manners</h3>
          <p>Be kind, clean, and happy.</p>
        </Link>

        <Link to="/game/puzzle" className="home-card" onClick={handleCardClick}>
          <img src="/src/assets/GR4.jpg" alt="puzzle" />
          <h3>Fun Puzzle</h3>
          <p>Play and Learn</p>
        </Link>
      </div>
    </>
  );
}
