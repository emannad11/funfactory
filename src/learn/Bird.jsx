import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Bird.css";
import SoundButton from "./SoundButton";
import { Link } from "react-router-dom";

export default function Bird() {
  const birds = [
    {
      id: 1,
      title: "Parrot",
      img: "/src/assets/parrot.jpg",
      images: [
        "/src/assets/Parrot3.jpg",
        "/src/assets/Parrot1.webp",
        "/src/assets/Parrot2.jpg",
        "/src/assets/Parrot4.webp",
        "/src/assets/Parrot5.jpg",
      ],
      paragraph:
        `A parrot is a colorful bird.  
      Parrots eat fruits, seeds, and nuts.  
    They live in trees and forests.  
    Parrots can talk, whistle, and mimic sounds.  
    They are playful and love to be around people.`,
    },
    {
      id: 2,
      title: "Sparrow",
      img: "/src/assets/sparrow.jpeg",
      images: [
        "/src/assets/Sparrow1.jpeg",
        "/src/assets/Sparrow2.jpeg",
        "/src/assets/Sparrow3.webp",
        "/src/assets/nest.jpg",
        "/src/assets/Sparrow4.webp",
      ],
      paragraph: `
    A sparrow is a small brown bird.  
    Sparrows eat seeds, grains, and insects.  
    They live in trees, gardens, and near houses.  
    Sparrows can chirp and fly very fast.  
    They are friendly and often stay in flocks.`
    },
    {
      id: 3,
      title: "Peacock",
      img: "/src/assets/peacock.webp",
      images: [
        "/src/assets/peacock1.jpg",
        "/src/assets/peacock2.jpeg",
        "/src/assets/peacock3.jpeg",
        "/src/assets/peacock4.webp",
        "/src/assets/peacock5.webp",
      ],
      paragraph: `
    A peacock is a beautiful bird with colorful feathers.  
    Peacocks eat grains, insects, and plants.  
    They live in forests.  
    Male peacocks have long, shiny tail feathers that they fan out.  
    Peacocks can make loud calls and are very proud birds.`,
    },
    {
      id: 4,
      title: "Hen",
      img: "/src/assets/hen.webp",
      images: [
        "/src/assets/hen2.webp",
        "/src/assets/hen1.webp",
        "/src/assets/hen3.webp",
        "/src/assets/hen4.jpeg",
        "/src/assets/hen5.jpg",
      ],
      paragraph: ` 
     A hen is a farm bird.  
    Hens eat grains, seeds, and small insects.  
    They live on farms.  
    Hens lay eggs for people to eat.  
    They cluck and scratch the ground to find food.`,
    },
    {
      id: 5,
      title: "Penguin",
      img: "/src/assets/p.jpeg",
      images: [
        "/src/assets/penguin1.webp",
        "/src/assets/penguin5.jpg",
        "/src/assets/penguin2.jpg",
        "/src/assets/penguin3.jpg",
        "/src/assets/penguin3.jpg",
      ],
      paragraph: `
    A penguin is a flightless bird that lives in cold places.  
    Penguins eat fish and small sea animals.   
    Penguins can swim very fast in the water.  
    They waddle when they walk on land and are very cute.`,
    },
    {
      id: 6,
      title: "Ostrich",
      img: "/src/assets/ostrich.avif",
      images: [
        "/src/assets/ostrich1.avif",
        "/src/assets/ostrich5.webp",
        "/src/assets/ostrich2.jpeg",
        "/src/assets/ostrich3.jpg",
        "/src/assets/ostrich4.jpg",
      ],
      paragraph: `
    An ostrich is the largest bird on land  
    Ostriches eat plants, seeds, and insects.  
    They live in open grasslands and deserts.  
    Ostriches cannot fly but run very fast on their strong legs.  
    They have long necks and big eyes to see far away.`,
    },
    {
      id: 7,
      title: "Dove",
      img: "/src/assets/dove.jpg",
      images: [
       "/src/assets/dove1.jpeg",
        "/src/assets/dove2.webp",
        "/src/assets/dove3.jpg",
        "/src/assets/dove4.jpg",
        "/src/assets/dove5.jpg",
      ],
      paragraph: `
    A dove is a small and gentle bird.  
    Doves eat seeds, grains, and fruits.  
    They live in trees, gardens, and near houses.  
    Doves can coo and fly gracefully in the sky.  
    They are symbols of peace and love.`,
    },
    {
      id: 8,
      title: "Owl",
      img: "/src/assets/owl.jpeg",
      images: [
        "/src/assets/owl1.jpg",
        "/src/assets/owl4.jpg",
        "/src/assets/owl2.jpg",
        "/src/assets/owl5.jpg",
        "/src/assets/owl3.jpeg",
      ],
      paragraph: `
    An owl is a bird that comes out at night.  
    Owls eat mice, insects, and small animals.  
    They live in trees, forests, and barns.  
    Owls can turn their heads all the way around.  
    They have big eyes and can see very well in the dark.`,
    },
    {
     id: 9,
      title: "Duck",
      img: "/src/assets/duck.avif",
      images: [
        "/src/assets/duck1.jpg",
        "/src/assets/duck5.webp",
        "/src/assets/duck2.jpg",
        "/src/assets/duck3.jpg",
        "/src/assets/duck4.jpg",
      ],
      paragraph: `
    A duck is a water bird.  
    Ducks eat plants, insects, and small fish.  
    They live in ponds, lakes, and rivers.  
    Ducks can swim very well and also fly.  
    They quack and waddle when they walk on land.`,
    },
    {
      id: 10,
      title: "Eagle",
      img: "/src/assets/eagle.jpg",
      images: [
       "/src/assets/eagle1.jpeg",
        "/src/assets/eagle3.webp",
        "/src/assets/eagle2.jpg",
        "/src/assets/eagle5.jpg",
        "/src/assets/eagle4.jpg",
      ],
      paragraph: ` 
     An eagle is a big and strong bird.  
    Eagles eat fish, small animals, and birds.  
    They live in mountains, forests, and near rivers.  
    Eagles can fly very high and have sharp eyes to see far.  
    They are powerful and brave birds.`,
    },

  ];

  const [selectedBird, setSelectedBird] = useState(null);

  const openModal = (bird) => {
    window.speechSynthesis.cancel();
    setSelectedBird(bird);
    const utterance = new SpeechSynthesisUtterance(bird.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () =>
    {
      window.speechSynthesis.cancel();
    setSelectedBird(null);
    }

  return (
    <>
    <div className="heading7"><h2>Birds</h2></div>
      <div className="container1">
        {birds.map((bird) => (
          <div
            key={bird.id}
            className="card1"
            onClick={() => openModal(bird)}
          >
            <img src={bird.img} alt={bird.title} />
            <h3>{bird.title}</h3>
          </div>
        ))}
      </div>
      {selectedBird && (
        <div className="bird-modal-overlay" onClick={closeModal}>
          <div
            className="bird-modal-content"
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
              className="bird-swiper"
            >
              {selectedBird.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${selectedBird.title} ${i + 1}`}
                    className="bird-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bird-card">
              <div className="bird-header">
                <h2>{selectedBird.title}</h2>
                <SoundButton text={selectedBird.paragraph} />
              </div>
              <p>{selectedBird.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
