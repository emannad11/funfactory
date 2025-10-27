import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Vegetable.css";
import SoundButton from "./SoundButton";
import { Link } from "react-router-dom";
export default function Vegetable() {
  const vegetables = [
       {
      id: 1,
      title: "Potato",
      img: "/src/assets/potato.jpg",
      images : [
        "/src/assets/pp1.webp",
        "/src/assets/pp2.jpg",
        "/src/assets/pp3.jpg",
        "/src/assets/pp4.jpg",
        "/src/assets/pp5.jpg",
    ],
    paragraph : `
  A potato is a tasty vegetable.  
  It grows under the ground.  
  Potatoes are used to make chips and fries.  
  They are brown outside and white inside.  
  Kids love to eat potatoes in many dishes.
     `
    },
    {
      id: 2,
      title: "Tomato",
      img: "/src/assets/tomato.jpeg",
      images : [
        "/src/assets/to.webp",
        "/src/assets/to2.jpg",
        "/src/assets/to3.jpg",
        "/src/assets/to5.jpg",
        "/src/assets/to4.jpg",
    ],
    paragraph : `
  A tomato is a red vegetable.  
  It is soft and juicy inside.  
  Tomatoes are used in salads and sauces.  
  They grow on green plants.  
  Tomatoes make our food tasty and healthy. 
 `
    },
    {
      id: 3,
      title: "Carrot",
      img: "/src/assets/carrot.jpeg",
          images : [
        "/src/assets/co1.jpg",
        "/src/assets/co2.jpg",
        "/src/assets/co3.webp",
        "/src/assets/co4.webp",
        "/src/assets/co5.webp",
    ],
     paragraph : `
  A carrot is an orange vegetable.  
  It grows under the ground.  
  Carrots are crunchy and sweet.  
  Rabbits love to eat carrots.  
  Carrots help us stay healthy and strong. 
     `
    },
    {
      id: 4,
      title: "Onion",
      img: "/src/assets/onion.webp",
      images : [
        "/src/assets/on1.webp",
        "/src/assets/on3.jpg",
        "/src/assets/on2.webp",
        "/src/assets/on5.jpg",
        "/src/assets/on4.jpg",
    ],
    paragraph : `
  An onion is a round vegetable.  
  It has many thin layers inside.  
  Onions can be red, white, or yellow.  
  People use onions in many foods.  
  Onions make our food tasty and healthy.  
     `
    },
    {
      id: 5,
      title: "Cabbage",
      img: "/src/assets/cabbage.webp",
          images : [
        "/src/assets/ca1.webp",
        "/src/assets/ca2.jpeg",
        "/src/assets/ca5.jpg",
        "/src/assets/ca3.avif",
        "/src/assets/ca4.jpg",
    ],
     paragraph : `  
  Cabbage is a green leafy vegetable.  
  It looks like a round ball.  
  The leaves are soft and crunchy.  
  People eat cabbage in salads and curries.  
  It keeps us strong and healthy.  
     `
    },
    {
      id: 6,
      title: "Spinach",
      img: "/src/assets/spinach.jpg",
          images : [
        "/src/assets/sp1.jpg",
        "/src/assets/sp2.webp",
        "/src/assets/sp3.jpeg",
        "/src/assets/sp5.jpeg",
        "/src/assets/sp4.jpg",
    ],
    paragraph : `
  Spinach is a green leafy vegetable.  
  It has soft and thin leaves.  
  People eat spinach cooked or in salads.  
  Spinach makes us strong and healthy.  
  It is full of vitamins and iron.  
     `
    },
     {
      id: 7,
      title: "Broccoli",
      img: "/src/assets/broccoli.jpeg",
         images : [
        "/src/assets/b1.webp",
        "/src/assets/b4.jpeg",
        "/src/assets/b2.jpg",
        "/src/assets/b3.webp",
        "/src/assets/b5.jpg",
    ],
     paragraph : `
  Broccoli is a green vegetable.  
  It looks like a small tree.  
  People eat broccoli boiled, cooked, or raw.  
  It keeps us strong and healthy.  
  Broccoli is full of vitamins and minerals.  
      `
    },
     {
      id: 8,
      title: "Peas",
      img: "/src/assets/peas.jpg",
      images : [
        "/src/assets/pea1.webp",
        "/src/assets/pea2.jpeg",
        "/src/assets/pea4.webp",
        "/src/assets/pea3.webp",
        "/src/assets/pea5.jpg",
    ],
    paragraph : `
  Peas are small round green vegetables.  
  They grow inside a pod.  
  Peas are sweet and tasty to eat.  
  People use peas in rice, curry, and soup.  
  Peas make our body healthy and strong.  
        `
    },
        {
      id: 9,
      title: "Cauliflower",
      img: "/src/assets/cauliflower.webp",
         images : [
        "/src/assets/c11.webp",
        "/src/assets/c44.jpg",
        "/src/assets/c22.webp",
        "/src/assets/c55.webp",
        "/src/assets/c33.avif",
    ],
    paragraph : `
  Cauliflower is a white vegetable.  
  It looks like a big white flower.  
  People cook it in curry and fry it.  
  Cauliflower is full of vitamins.  
  It keeps us strong and healthy.  
      `
    },
     {
      id: 10,
      title: "Brinjal",
      img: "/src/assets/brinjal.jpeg",
      images : [
        "/src/assets/br1.webp",
        "/src/assets/br2.jpg",
        "/src/assets/br3.webp",
        "/src/assets/br4.jpg",
        "/src/assets/br5.avif",
    ],
      paragraph : `
  Brinjal is a purple vegetable.  
  It is also called eggplant.  
  People cook brinjal in many tasty dishes.  
  It has small seeds inside.  
  Brinjal makes our body strong and healthy.  
      `
    },
    
  ];
 const [selectedVegetable, setSelectedVegetable] = useState(null);
 
   const openModal = (vegetable) => {
     window.speechSynthesis.cancel();
     setSelectedVegetable(vegetable);
     const utterance = new SpeechSynthesisUtterance(vegetable.title);
     utterance.lang = "en-US";
     utterance.rate = 0.8;
     window.speechSynthesis.speak(utterance);
   };
 
   const closeModal = () => {
     window.speechSynthesis.cancel();
     setSelectedVegetable(null);
   }
 
   return (
     <>
     <div className="heading7"><h2>Vegetables</h2></div>
       <div className="container1">
         {vegetables.map((vegetable) => (
           <div
             key={vegetable.id}
             className="card1"
             onClick={() => openModal(vegetable)}
           >
             <img src={vegetable.img} alt={vegetable.title} />
             <h3>{vegetable.title}</h3>
           </div>
         ))}
       </div>
       {selectedVegetable && (
         <div className="vegetable-modal-overlay" onClick={closeModal}>
           <div
             className="vegetable-modal-content"
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
               className="vegetable-swiper"
             >
               {selectedVegetable.images.map((img, i) => (
                 <SwiperSlide key={i}>
                   <img
                     src={img}
                     alt={`${selectedVegetable.title} ${i + 1}`}
                     className="vegetable-img"
                   />
                 </SwiperSlide>
               ))}
             </Swiper>
             <div className="vegetable-card">
               <div className="vegetable-header">
                 <h2>{selectedVegetable.title}</h2>
                 <SoundButton text={selectedVegetable.paragraph} />
               </div>
               <p>{selectedVegetable.paragraph}</p>
             </div>
           </div>
         </div>
       )}
     </>
   );
 }
 