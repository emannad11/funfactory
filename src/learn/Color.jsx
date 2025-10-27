 import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./style/Color.css";
import SoundButton from "./SoundButton";
export default function Color() {
  const colors = [
       {
           id: 1,
      title: "Blue",
      fixedImg: "/src/assets/bluee.webp",
      images: [
       "/src/assets/Blue2.jpg",
        "/src/assets/Blue1.jpg",
        "/src/assets/Blue3.jpg",
        "/src/assets/Blue5.jpg",
        "/src/assets/Blue4.jpg",
      ],
      paragraph: `
                    Blue is the color of the sky.  
                    It is also the color of the sea and rivers.  
                    Blue makes us feel calm and peaceful.  
                    Many birds, flowers, and clothes are blue.  
                    Blue is a cool and beautiful color.
      `
    },
    {
      id: 2,
      title: "Pink",
      fixedImg: "/src/assets/pink.jpg",
       images: [
        "/src/assets/Pink1.jpg",
        "/src/assets/Pink2.jpg",
        "/src/assets/Pink3.jpg",
        "/src/assets/Pink4.webp",
        "/src/assets/Pink5.jpg",
        ],
        paragraph: `
                    Pink is the color of flowers.  
                    It is also the color of candy and toys.  
                    Pink is bright, soft, and pretty.  
                    Many dresses and balloons are pink.  
                    Pink is a sweet and happy color.
        `
    },
    {
      id: 3,
      title: "Red",
      fixedImg: "/src/assets/red.webp",
     images:[
       "/src/assets/Red1.jpg",
        "/src/assets/Red2.jpg",
        "/src/assets/Red3.jpg",
        "/src/assets/Red4.jpg",
        "/src/assets/Red5.webp",
     ],
     paragraph:` Red is the color of apples.  
                    It is also the color of roses and cherries.  
                    Red is bright, bold, and strong.  
                    Many cars, toys, and clothes are red.  
                    Red is a happy and exciting color. 
     `
    },
    {
      id: 4,
      title: "Green",
      fixedImg: "/src/assets/green.jpg",
       images : [
        "/src/assets/Green1.jpg",
        "/src/assets/Green2.jpeg",
        "/src/assets/Green4.jpg",
        "/src/assets/Green3.jpg",
        "/src/assets/Green5.png",
       ],
       paragraph : `
                    Green is the color of grass.  
                    It is also the color of trees and leaves.  
                    Green makes us feel fresh and calm.  
                    Many fruits and vegetables are green.  
                    Green is the color of nature.  
       `
    },
    {
      id: 5,
      title: "Orange",
      fixedImg: "/src/assets/orange.jpg",
      images : [
        "/src/assets/Orange1.jpg",
        "/src/assets/Orange2.jpg",
        "/src/assets/Orange3.jpg",
        "/src/assets/Orange4.jpg",
        "/src/assets/Orange5.jpg",
      ],
      paragraph : `
         Orange is the color of oranges.  
                    It is also the color of carrots and pumpkins.  
                    Orange is bright, warm, and cheerful.  
                    Many flowers, fruits, and toys are orange.  
                    Orange is a fun and happy color.   
      `
    },
    {
      id: 6,
      title: "Grey",
      fixedImg: "/src/assets/grey.png",
      images : [
       "/src/assets/Grey1.webp",
        "/src/assets/Grey2.jpg",
        "/src/assets/Grey4.avif",
        "/src/assets/Grey3.webp",
        "/src/assets/eat.jpg",
      ],
      paragraph:`
       Grey is the color of clouds.  
                    It is also the color of stones and rocks.  
                    Grey is calm and quiet like the evening sky.  
                    Many animals like elephants and wolves are grey.  
                    Grey is a soft and gentle color.  
      `
    },
     {
      id: 7,
      title: "Purple",
      fixedImg: "/src/assets/purple.webp",
      images :[
      "/src/assets/Purple1.jpg",
        "/src/assets/Purple2.jpeg",
        "/src/assets/Purple3.jpg",
        "/src/assets/Purple4.webp",
        "/src/assets/purple5.jpg",
    ],
    paragraph : `
     Purple is the color of grapes.  
                    It is also the color of lavender flowers.  
                    Purple looks bright and royal.  
                    Many toys, dresses, and balloons are purple.  
                    Purple is a magical and pretty color.
    `
    },
     {
      id: 8,
      title: "Brown",
      fixedImg: "/src/assets/brown.png",
      images : [
       "/src/assets/Brown1.jpg",
        "/src/assets/Brown2.jpg",
        "/src/assets/Brown3.jpg",
        "/src/assets/Brown4.jpg",
        "/src/assets/Brown5.jpg",
      ],
      paragraph : `
       Brown is the color of the earth.  
                    It is also the color of tree trunks and wood.  
                    Brown looks warm and natural.  
                    Many animals like bears and monkeys are brown.  
                    Brown is a strong and steady color.
      `
    },
        {
       id: 9,
      title: "Black",
      fixedImg: "/src/assets/black.jpg",
      images: [
        "/src/assets/Black2.jpg",
        "/src/assets/Black1.jpeg",
        "/src/assets/Black3.avif",
        "/src/assets/Black5.webp",
        "/src/assets/Black4.jpg",
      ],
      paragraph: `
      Black is the color of the night sky. 
      It is also the color of coal and shadows.
      Black looks dark but also strong.
      Many animals like cats and crows are black.
      Black is a bold and powerful color.
      `
    },
     {
      id: 10,
      title: "Yellow",
      fixedImg: "/src/assets/yellow.jpg",
      images : [
        "/src/assets/Yellow1.avif",
        "/src/assets/Yellow2.jpg",
        "/src/assets/Yellow3.jpg",
        "/src/assets/Yellow4.jpg",
        "/src/assets/yellow5.webp",
      ],
      paragraph : `
       Yellow is the color of the sun.  
                    It is also the color of bananas and corn.  
                    Yellow is bright, warm, and happy.  
                    Many flowers, toys, and clothes are yellow.  
                    Yellow is a cheerful and sunny color.   
      `
    },
    
  ];
  const [selectedColor, setSelectedColor] = useState(null);

 
   const openModal = (color) => {
     window.speechSynthesis.cancel();
     setSelectedColor(color);
     const utterance = new SpeechSynthesisUtterance(color.title);
     utterance.lang = "en-US";
     utterance.rate = 0.8;
     window.speechSynthesis.speak(utterance);
   };
const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedColor(null);
  };

  return (
    <>
    <div className="heading7"><h2>Colors</h2></div>
      <div className="container1">
        {colors.map((color) => (
          <div
            key={color.id}
            className="card1"
            onClick={() => openModal(color)}
          >
            <img src={color.fixedImg} alt={color.title} />
            <h3>{color.title}</h3>
          </div>
        ))}
      </div>
      {selectedColor && (
        <div className="color-modal-overlay" onClick={closeModal}>
          <div
            className="color-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>

            
            <div className="color-flex-section">
              <div className="fixed-image-section">
                <img
                  src={selectedColor.fixedImg}
                  alt="Fixed Black"
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
                className="color-swiper"
              >
                {selectedColor.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${selectedColor.title} ${i + 1}`}
                      className="color-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

        
            <div className="color-card">
              <div className="color-header">
                <h2>{selectedColor.title}</h2>
                <SoundButton text={selectedColor.paragraph} />
              </div>
              <p>{selectedColor.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

