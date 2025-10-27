import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Fruit.css";
import SoundButton from "./SoundButton";
import { Link } from "react-router-dom";
export default function Fruit() {
  const fruits = [
       {
      id: 1,
      title: "Apple",
      img: "/src/assets/Apple.jpeg",
      images : [
        "/src/assets/Apple1.webp",
        "/src/assets/Apple2.jpeg",
        "/src/assets/Apple3.jpg",
        "/src/assets/Apple4.jpg",
        "/src/assets/Apple5.jpg",
    ],
    paragraph : `
  An apple is a round fruit.  
  Apples can be red, green, or yellow.  
  They are sweet, juicy, and tasty.  
  Apples grow on trees in orchards.  
  Eating apples keeps us healthy and strong.`
    },
    {
      id: 2,
      title: "Banana",
      img: "/src/assets/ban.webp",
        images : [
        "/src/assets/Banana1.webp",
        "/src/assets/Banana2.jpg",
        "/src/assets/Banana3.jpeg",
        "/src/assets/Banana4.jpg",
        "/src/assets/Banana5.jpeg",
    ],
     paragraph :`
  A banana is a long yellow fruit.  
  Bananas are soft, sweet, and tasty.  
  They grow in big bunches on banana plants.  
  Monkeys and children love to eat bananas.  
  Bananas give us energy and make us strong.
      `
    },
    {
      id: 3,
      title: "Mango",
      img: "/src/assets/mango.jpeg",
      images : [
        "/src/assets/Mango1.jpg",
        "/src/assets/Mango2.webp",
        "/src/assets/Mango5.jpg",
        "/src/assets/Mango4.jpg",
        "/src/assets/Mango3.webp",
    ],
  paragraph : `
  A mango is a sweet and juicy fruit.  
  Mangoes are usually yellow or green when ripe.  
  They grow on big trees in summer.  
  People call it the "King of Fruits".  
  Mangoes are very tasty and healthy.
       `
    },
    {
      id: 4,
      title: "Pineapple",
      img: "/src/assets/pineapple.webp",
      images : [
        "/src/assets/pineapple1.avif",
        "/src/assets/pineapple3.jpg",
        "/src/assets/pineapple5.jpg",
        "/src/assets/Pineapple4.jpg",
        "/src/assets/pineapple2.webp",
    ],
    paragraph : `
  A pineapple is a big fruit with a rough skin.  
  It is yellow inside and very juicy.  
  Pineapples taste sweet and a little sour.  
  They grow in warm places.  
  Kids enjoy pineapple juice and slices.`
    },
    {
      id: 5,
      title: "Strawberry",
      img: "/src/assets/strawberry.jpeg",
      images : [
        "/src/assets/Strawberry1.webp",
        "/src/assets/Strawberry2.jpg",
        "/src/assets/Strawberry3.jpg",
        "/src/assets/Strawberry4.jpg",
        "/src/assets/Strawberry5.jpg",
    ],
    paragraph : `A strawberry is a small red fruit.  
  It has tiny seeds on its skin.  
  Strawberries are soft and sweet.  
  They grow on small green plants.  
  Many kids love to eat strawberries.`
    },
    {
      id: 6,
      title: "Grapes",
      img: "/src/assets/grap.jpeg",
      images : [
        "/src/assets/Grapes1.jpg",
        "/src/assets/Grapes2.jpeg",
        "/src/assets/Grapes3.jpg",
        "/src/assets/Grapes4.jpeg",
        "/src/assets/Grapes5.webp",
    ],
     paragraph : `
        Grapes are small and round fruits.  
      They can be green, purple, or red.  
     Grapes taste sweet and juicy.  
     They grow in bunches on vines.  
     Kids love to eat grapes as a snack.
      `
    },
     {
      id: 7,
      title: "Orange",
      img: "/src/assets/orangeee.jpeg",
      images : [
        "/src/assets/O1.jpg",
        "/src/assets/O2.jpg",
        "/src/assets/O3.jpg",
        "/src/assets/O4.jpg",
        "/src/assets/O5.webp",
    ],
      paragraph : `   
      Orange is a round fruit.  
     It has a bright orange color.  
     Oranges are juicy and sweet.  
     They are full of vitamin C.  
     Kids love to drink orange juice. `
    },
     {
      id: 8,
      title: "Guava",
      img: "/src/assets/guava.jpeg",
      images : [
        "/src/assets/G1.webp",
        "/src/assets/G2.jpg",
        "/src/assets/G5.jpg",
        "/src/assets/G4.jpg",
        "/src/assets/G3.webp",
    ],
    paragraph : `
       Guava is a round green fruit.  
     It is soft and tasty to eat.  
     Inside, it can be white or pink.  
     Guava is full of vitamins and keeps us healthy.  
     Kids like to eat it with salt or chat masala.
    `
    },
        {
      id: 9,
      title: "Peach",
      img: "/src/assets/peach.jpg",
      images : [
        "/src/assets/P1.webp",
        "/src/assets/P3.jpg",
        "/src/assets/P5.jpg",
        "/src/assets/P4.jpg",
        "/src/assets/P2.webp",
    ],
    paragraph : `
 A peach is a soft and juicy fruit.  
  It is round and has fuzzy skin.  
  The color is yellow with a little red.  
  Inside, there is one big seed.  
  Peaches are sweet and healthy to eat. 
     `
    },
     {
      id: 10,
      title: "Litchi",
      img: "/src/assets/lyche.webp",
          images : [
        "/src/assets/L1.jpg",
        "/src/assets/L2.jpg",
        "/src/assets/L3.jpg",
        "/src/assets/L4.jpg",
        "/src/assets/L5.jpg",
    ],
    paragraph : `
  A litchi is a small, round fruit.  
  It has red skin that is rough.  
  Inside, the fruit is white and juicy.  
  It has one brown seed in the middle.  
  Litchis are very sweet and tasty. 
     `
    },
    
  ];
const [selectedFruit, setSelectedFruit] = useState(null);

  const openModal = (fruit) => {
    window.speechSynthesis.cancel();
    setSelectedFruit(fruit);
    const utterance = new SpeechSynthesisUtterance(fruit.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => 
    {
      window.speechSynthesis.cancel();
      setSelectedFruit(null);
    }

  return (
    <>
    <div className="heading7"><h2>Fruits</h2></div>
      <div className="container1">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="card1"
            onClick={() => openModal(fruit)}
          >
            <img src={fruit.img} alt={fruit.title} />
            <h3>{fruit.title}</h3>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-modal-overlay" onClick={closeModal}>
          <div
            className="fruit-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              ✖
            </button>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              speed={800}
              spaceBetween={15}
              slidesPerView={1}
              className="fruit-swiper"
            >
              {selectedFruit.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${selectedFruit.title} ${i + 1}`}
                    className="fruit-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="fruit-card">
              <div className="fruit-header">
                <h2>{selectedFruit.title}</h2>
                <SoundButton text={selectedFruit.paragraph} />
              </div>
              <p>{selectedFruit.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 
