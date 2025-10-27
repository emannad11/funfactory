import { useState } from "react";
import "./Gk.css";
import SB from "./SB"; 

export default function Knowledge() {
  const subjects = [
    {
      id: 1,
      title: "English",
      img: "/src/assets/english.jpg",
      questions: [
        {
          question: "Which letter starts the word 'Apple'?",
          answer: "The letter A starts the word Apple.",
          image: "/src/assets/A.jpg",
        },
        {
          question: "What letter comes after B?",
          answer: "The letter C comes after B.",
          image: "/src/assets/catt.jpg",
        },
        {
          question: "Which letter makes the 'Duh' sound?",
          answer: "The letter D makes the 'Duh' sound.",
          image: "/src/assets/dogg.webp",
        },
        {
          question: "What is the last letter of the alphabet?",
          answer: "The last letter is Z.",
          image: "/src/assets/zeb.png",
        },
        {
          question: "Which letter starts the word 'Ball'?",
          answer: "The letter B starts the word Ball.",
          image: "/src/assets/ball.jpg",
        },
      ],
    },
    { 
      id: 2, 
      title: "Math", 
      img: "/src/assets/math.jpg", 
      questions: [
  
  {
    question: "How many fingers are there in one hand?",
    answer: "There are five fingers in one hand.",
    image: "/src/assets/hand.jpg",
  },
  {
    question: "Can you count the footballs in the picture?",
    answer: "There are three footballs!.",
    image: "/src/assets/ba.jpg",
  },
  {
    question: "Which shape has three sides?",
    answer: "A triangle has three sides.",
    image: "/src/assets/tri.jpg",
  },
  {
    question: "Can you count the balloons in the picture?",
    answer: "There are three colorful balloons!",
    image: "/src/assets/3.jpg",
  },
  {
    question: "How many legs does a cat have?",
    answer: "A cat has four legs.",
    image: "/src/assets/cat.jpg",
  },

  ]
     },
    { 
      id: 3, 
      title: "Science", 
      img: "/src/assets/sci.jpg", 
      questions: [
  {
    question: "What do we need to breathe?",
    answer: "We need air to breathe.",
    image: "/src/assets/air.jpg",
  },
  {
    question: "What do plants need to grow?",
    answer: "Plants need water and sunlight to grow.",
    image: "/src/assets/plant.jpg",
  },
  {
    question: "Where does rain come from?",
    answer: "Rain comes from the clouds.",
    image: "/src/assets/rainn.jpg",
  },
  {
    question: "What shines in the sky during the day?",
    answer: "The sun shines in the sky during the day.",
    image: "/src/assets/sunn.png",
  },
  {
    question: "What animal gives us milk?",
    answer: "A cow gives us milk.",
    image: "/src/assets/cow.webp",
  },
]
 },
    { 
      id: 4, 
      title: "Computer Science", 
      img: "/src/assets/comp.jpg", 
      questions: [
  {
    question: "What is a computer?",
    answer: "A computer is a machine that helps us work and play.",
    image: "/src/assets/computer.jpg",
  },
  {
    question: "What do we use to move things on a computer?",
    answer: "We use a mouse to move things on a computer.",
    image: "/src/assets/mouse.jpg",
  },
  {
    question: "What do we see on a computer screen?",
    answer: "We see pictures and words on a computer screen.",
    image: "/src/assets/screen.jpg",
  },
  {
    question: "Which key do we press to type letters?",
    answer: "We press keys on the keyboard to type letters.",
    image: "/src/assets/keyboard.jpg",
  },
  {
    question: "Is a tablet like a computer?",
    answer: "Yes, a tablet is like a small computer.",
    image: "/src/assets/tablet.jpg",
  },
]
},
    { 
      id: 5, 
      title: "Social Studies", 
      img: "/src/assets/so.jpg", 
     questions: [
  {
    question: "Who takes care of you at home?",
    answer: "My family takes care of me at home.",
    image: "/src/assets/familyy.jpg",
  },
  {
    question: "Where do you go to learn and play?",
    answer: "I go to school to learn and play.",
    image: "/src/assets/school.jpg",
  },
  {
    question: "Who helps you cross the road safely?",
    answer: "A traffic police officer helps us cross the road safely.",
    image: "/src/assets/police.jpg",
  },
  {
    question: "Who brings our letters and parcels?",
    answer: "A postman brings our letters and parcels.",
    image: "/src/assets/postman.jpg",
  },
  {
    question: "What should we say when someone helps us?",
    answer: "We should say Thank you!",
    image: "/src/assets/thankyou.jpg",
  },
]
 },
    { 
      id: 6, 
      title: "Geography", 
      img: "/src/assets/geo.jpg", 
     questions: [
  {
    question: "What do we live on?",
    answer: "We live on planet Earth.",
    image: "/src/assets/earth.jpg",
  },
  {
    question: "What do we call a big area covered with sand?",
    answer: "It is called a desert.",
    image: "/src/assets/desert.jpg",
  },
  {
    question: "Where do fishes live?",
    answer: "Fishes live in water.",
    image: "/src/assets/fishwater.jpg",
  },
  {
    question: "What is full of trees and animals?",
    answer: "A forest is full of trees and animals.",
    image: "/src/assets/forest.jpg",
  },
  {
    question: "What do we see shining in the sky at night?",
    answer: "We see stars shining in the night sky.",
    image: "/src/assets/moon.jpg",
  },
]
},
    { 
      id: 7, 
      title: "Ethics", 
      img: "/src/assets/isl.jpg", 
      questions: [
  {
    question: "Who made us all?",
    answer: "Allah made us all.",
    image: "/src/assets/allah.jpg",
  },
  {
    question: "Who is our last Prophet (PBUH)?",
    answer: "Our last Prophet is Prophet Muhammad (PBUH).",
    image: "/src/assets/rasool.jpg",
  },
  {
    question: "What is the holy book of Muslims?",
    answer: "The holy book is the Quran.",
    image: "/src/assets/quran.jpg",
  },
  {
    question: "Where do Muslims go to pray?",
    answer: "Muslims go to the mosque to pray.",
    image: "/src/assets/mosque.jpg",
  },
  {
    question: "What do we say to greet each other?",
    answer: "We say Assalamu Alaikum.",
    image: "/src/assets/salam.jpg",
  },
]
 },
    { 
      id: 8, 
      title: "Art", 
      img: "/src/assets/art.jpeg", 
      questions: [
  {
    question: "What color is the grass?",
    answer: "The grass is green.",
    image: "/src/assets/grass.jpg",
  },
  {
    question: "What do we use to draw?",
    answer: "We use crayons to draw.",
    image: "/src/assets/crayon.jpg",
  },
  {
    question: "What color is the sun?",
    answer: "The sun is yellow.",
    image: "/src/assets/sunn.png",
  },
  {
    question: "What do we use to paint?",
    answer: "We use a paintbrush to paint.",
    image: "/src/assets/paintbrush.jpg",
  },
  {
    question: "What color is the sky?",
    answer: "The sky is blue.",
    image: "/src/assets/sky.jpg",
  },
]
 },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const openModal = (subject) => {
    window.speechSynthesis.cancel();
    setSelectedSubject(subject);
    const titleUtter = new SpeechSynthesisUtterance(subject.title);
    titleUtter.lang = "en-US";
    titleUtter.rate = 0.8;
    window.speechSynthesis.speak(titleUtter);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedSubject(null);
  };

  return (
    <>
    <div className="heading9"><h2>General Knowledge</h2></div>
      <div className="container1">
        {subjects.map((subject) => (
          <div key={subject.id} className="card1" onClick={() => openModal(subject)}>
            <img src={subject.img} alt={subject.title} />
            <h3>{subject.title}</h3>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-header">
              <h2>{selectedSubject.title}</h2>
            </div>

            <div className="questions-list1">
              {selectedSubject.questions.map((q, index) => (
                <div className="question-card1" key={index}>
                  <div className="question-left1">
                    <div className="question-line1">
                      <strong>{q.question}</strong>
                      <SB text={`${q.question} ${q.answer}`} />
                    </div>
                    <p>{q.answer}</p>
                  </div>

                  <img src={q.image} alt="related" className="question-image1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
