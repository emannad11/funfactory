import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Class.css";

export default function Classes() {
  const navigate = useNavigate();
  const clickSoundRef = useRef(null);

  const handleCardClick = (path, e) => {
    const card = e.currentTarget;
    card.dataset.clicked = "true";

    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0; 
      clickSoundRef.current.play();
    }
    setTimeout(() => {
      card.dataset.clicked = "false";
    }, 400);
    setTimeout(() => {
      navigate(path);
    }, 250);
  };

  return (
    <div className="classes-container">
      <audio ref={clickSoundRef} src="/src/assets/sounds/click.mp3" preload="auto"></audio>

      <h1 className="classes-heading">Select Your Class 🎓</h1>

      <div className="classes-grid">
        <div className="class-card" onClick={(e) => handleCardClick("/home", e)}>
          <img src="/src/assets/play.jpg" alt="Play Group - Prep" />
          <h2>Play Group - Prep</h2>
        </div>

        <div className="class-card" onClick={(e) => handleCardClick("/class1-2", e)}>
          <img src="/src/assets/grade.jpg" alt="Grade 1 - 2" />
          <h2>Grade 1 - 2</h2>
        </div>

        <div className="class-card" onClick={(e) => handleCardClick("/class3-4", e)}>
          <img src="/src/assets/grade2.jpg" alt="Grade 3 - 4" />
          <h2>Grade 3 - 4</h2>
        </div>

        <div className="class-card" onClick={(e) => handleCardClick("/class5-6", e)}>
          <img src="/src/assets/grade3.jpg" alt="Grade 5 - 6" />
          <h2>Grade 5 - 6</h2>
        </div>
      </div>
    </div>
  );
}
