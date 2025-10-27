import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import clickSoundFile from "/src/assets/sounds/click.mp3";

export default function Home() {
  let clickSound;

  useEffect(() => {
    clickSound = new Audio(clickSoundFile);
  }, []);

  const handleClick = () => {
    const sound = new Audio(clickSoundFile);
    sound.currentTime = 0;
    sound.play();
  };

  return (
    <>
      <div className="heading9">
        <h2>PlayGroup - Prep</h2>
      </div>

      <div className="home-container">
        <Link to="/learning" className="home-card" onClick={handleClick}>
          <img src="/src/assets/poem.jpg" alt="Learning" />
          <h3>Learning</h3>
          <p>Explore fun lessons for kids.</p>
        </Link>

        <Link to="/quiz" className="home-card" onClick={handleClick}>
          <img src="/src/assets/quiz.png" alt="Quiz" />
          <h3>Quiz</h3>
          <p>Smart kids love fun quizzes.</p>
        </Link>

        <Link to="/poem" className="home-card" onClick={handleClick}>
          <img src="/src/assets/learning.webp" alt="poems" />
          <h3>Poems</h3>
          <p>Sing along to happy rhymes.</p>
        </Link>

        <Link to="/experiment" className="home-card" onClick={handleClick}>
          <img src="/src/assets/Experiment.jpeg" alt="experiments" />
          <h3>Experiments</h3>
          <p>Science is fun to try.</p>
        </Link>

        <Link to="/knowledge" className="home-card" onClick={handleClick}>
          <img src="/src/assets/GK.jpg" alt="GK" />
          <h3>General Knowledge</h3>
          <p>Explore the world of knowledge.</p>
        </Link>

        <Link to="/drawing" className="home-card" onClick={handleClick}>
          <img src="/src/assets/drawing.jpg" alt="drawing" />
          <h3>Drawing</h3>
          <p>Draw, paint, and have fun.</p>
        </Link>

        <Link to="/habbits" className="home-card" onClick={handleClick}>
          <img src="/src/assets/habbit.jpg" alt="habbit" />
          <h3>Habbits</h3>
          <p>Be kind, clean, and happy.</p>
        </Link>

        <Link to="/funfact" className="home-card" onClick={handleClick}>
          <img src="/src/assets/f1.jpg" alt="fun fact" />
          <h3>Leadership principles</h3>
          <p>Lead with vision and heart.</p>
        </Link>
      </div>
    </>
  );
}
