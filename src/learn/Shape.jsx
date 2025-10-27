import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./style/Shape.css";
import SoundButton from "./SoundButton";

export default function Shape() {
  const shapes = [
    {
      id: 1,
      title: "Circle",
      cardImg: "/src/assets/circle.jpg", 
      fixedImg: "/src/assets/circlee.jpg", 
      images: [
        "/src/assets/C1.jpg",
        "/src/assets/C4.jpg",
        "/src/assets/C3.jpg",
        "/src/assets/C5.jpg",
        "/src/assets/C2.jpg",
      ],
      paragraph: `
        A circle is a round shape.  
        It has no corners and no sides.  
        A wheel is in the shape of a circle.  
        The sun and moon look like circles.  
        Circles are fun to draw and play with.
      `
    },
    {
      id: 2,
      title: "Square",
      cardImg: "/src/assets/square.jpg",
      fixedImg: "/src/assets/sq.jpg",
      images: [
       "/src/assets/S1.jpg",
        "/src/assets/S2.jpg",
        "/src/assets/S3.jpg",
        "/src/assets/S4.jpg",
        "/src/assets/S5.jpg",
      ],
      paragraph: `
         A square has four sides.  
      All the sides are equal.  
      It also has four corners.  
  A box and a chessboard are square shapes.  
  Squares are fun and easy to draw. 
      `
    },
    {
      id: 3,
      title: "Rectangle",
      cardImg: "/src/assets/rectangle.jpeg",
      fixedImg: "/src/assets/rec.jpg",
      images: [
        "/src/assets/R1.png",
        "/src/assets/R2.jpg",
        "/src/assets/R3.jpg",
        "/src/assets/R4.jpg",
        "/src/assets/R5.jpg",
      ],
      paragraph: `
         A rectangle has four sides.  
  The opposite sides are equal.  
  It also has four corners.  
  A door and a book are rectangle shapes.  
  Rectangles are longer than they are tall. 
      `
    },
    {
      id: 4,
      title: "Oval",
      cardImg: "/src/assets/oval.jpg",
      fixedImg: "/src/assets/ova.jpg",
       images: [
        "/src/assets/Ov1.jpeg",
        "/src/assets/Ov2.jpg",
        "/src/assets/Ov3.jpeg",
        "/src/assets/Ov4.webp",
        "/src/assets/Ov5.webp",
      ],
      paragraph: `
         An oval looks like an egg.  
  It is round but a little long.  
  An oval has no corners.  
  We see ovals in eggs and watermelons.  
  Ovals are fun shapes to find around us. 
      `
    },
    {
      id: 5,
      title: "Star",
      cardImg: "/src/assets/star.jpg",
       fixedImg: "/src/assets/sta.jpg",
       images: [
         "/src/assets/St1.png",
        "/src/assets/St2.jpg",
        "/src/assets/St3.jpg",
        "/src/assets/st4.jpg",
        "/src/assets/st5.jpg",
      ],
      paragraph: `
       A star has five points.  
  It shines bright in the night sky.  
  Stars look small but are very far away.  
  We also draw stars on paper for fun.  
  Stars make the sky look beautiful.
      `  
    },
    {
      id: 6,
      title: "Triangle",
      cardImg: "/src/assets/triangle.jpeg",
      
    },
     {
      id: 7,
      title: "Heart",
      cardImg: "/src/assets/heart.jpg",
       fixedImg: "/src/assets/hea.jpg",
       images: [
         "/src/assets/h1.jpg",
        "/src/assets/h2.jpeg",
        "/src/assets/h3..webp",
        "/src/assets/h4.jpg",
        "/src/assets/h5.png",
      ],
      paragraph: `
    A heart is a special shape.  
  It shows love and care.  
  Hearts are red or pink in color.  
  We draw hearts on cards and gifts.  
  Hearts make people happy.
      ` 
    },
     {
      id: 8,
      title: "Rhombus",
      cardImg: "/src/assets/rhombus.jpg",
       fixedImg: "/src/assets/rom.jpg",
       images: [
         "/src/assets/rh1.webp",
        "/src/assets/rh2.webp",
        "/src/assets/rh3.jpeg",
        "/src/assets/rh4.jpg",
        "/src/assets/rh5.webp",
      ],
      paragraph: `
     A rhombus has four sides.  
  All sides are equal in length.  
  It looks like a slanted square.  
  We can see rhombus shapes in kites.  
  Rhombus shapes are fun to draw.
      ` 
    },
        {
      id: 9,
      title: "Hexagon",
      cardImg: "/src/assets/hexagon.jpg",
         fixedImg: "/src/assets/hex.jpg",
       images: [
          "/src/assets/he1.jpeg",
        "/src/assets/he2.jpg",
        "/src/assets/he3.webp",
        "/src/assets/he4.webp",
        "/src/assets/he5.jpeg",
      ],
      paragraph: `
    A hexagon has six sides.  
  It also has six corners.  
  Honeycombs made by bees are hexagons.  
  Some tiles and nuts are hexagon-shaped.  
  Hexagons are very interesting shapes. 
      ` 
    },
     {
      id: 10,
      title: "Pentagon",
      cardImg: "/src/assets/pentagon.jpg",
         fixedImg: "/src/assets/pent.jpg",
       images: [
        "/src/assets/pe1.webp",
        "/src/assets/pe2.jpeg",
        "/src/assets/pe5.webp",
        "/src/assets/pe3.webp",
        "/src/assets/pe4.jpg",
      ],
      paragraph: `
      A pentagon has five sides.  
  It also has five corners.  
  Some houses have pentagon-shaped roofs.  
  We can see pentagons in drawings and patterns.  
  Pentagons are fun shapes to learn.  
      ` 
    },
    
  ];
  const [selectedShape, setSelectedShape] = useState(null);

  const openModal = (shape) => {
    window.speechSynthesis.cancel();
    setSelectedShape(shape);
    const utterance = new SpeechSynthesisUtterance(shape.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedShape(null);
  };

  return (
    <>
    <div className="heading7"><h2>Shapes</h2></div>
      <div className="container1">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="card1"
            onClick={() => openModal(shape)}
          >
            <img src={shape.cardImg} alt={shape.title} />
            <h3>{shape.title}</h3>
          </div>
        ))}
      </div>
      {selectedShape && (
        <div className="shape-modal-overlay" onClick={closeModal}>
          <div
            className="shape-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="shape-flex-section">
              <div className="fixed-image-section">
                <img
                  src={selectedShape.fixedImg} 
                  alt={selectedShape.title}
                  className="fixed-img"
                />
              </div>

              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                speed={800}
                spaceBetween={20}
                slidesPerView={1}
                className="shape-swiper"
              >
                {selectedShape.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${selectedShape.title} ${i + 1}`}
                      className="shape-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="shape-card">
              <div className="shape-header">
                <h2>{selectedShape.title}</h2>
                <SoundButton text={selectedShape.paragraph} />
              </div>
              <p>{selectedShape.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

