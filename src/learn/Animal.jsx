import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./style/Animal.css";
import SoundButton from "./SoundButton";
import { Link } from "react-router-dom";

export default function Animal() {
  const animals = [
    {
      id: 1,
      title: "Lion",
      img: "/src/assets/lion.jpg",
      images: [
     "/src/assets/liooon.jpg",
    "/src/assets/roar.avif",
    "/src/assets/eating.jpeg",
    "/src/assets/sleeping.jpg",
    "/src/assets/family.jpg",
      ],
      paragraph: `A lion is called the King of the Jungle.  
                  Lions live in groups called prides.  
                  They are very strong animals and eat meat.  
                  Male lions have big manes and can roar very loudly.`,
    },
    {
      id: 2,
      title: "Cow",
      img: "/src/assets/cow.webp",
      images: [
       "/src/assets/co.jpg",
        "/src/assets/coweating.webp",
        "/src/assets/pi.jpg",
        "/src/assets/sle.jpeg",
        "/src/assets/eee.webp",
      ],
      paragraph:  `  A cow is a farm animal.
                    Cows eat grass and give us milk.
                    They live together in groups called herds.
                    Cows are gentle and helpful animals that people take care of. `,
    },
    {
     id: 3,
      title: "Elephant",
      img: "/src/assets/elephantt.avif",
      images: [
        "/src/assets/elephant.jpg",
        "/src/assets/ro.jpg",
        "/src/assets/eat.jpg",
        "/src/assets/sl.webp",
        "/src/assets/ee.jpg",
      ],
      paragraph: `
                    An elephant is the biggest land animal.
                    Elephants live in groups called herds.
                    They eat plants, leaves, and fruits.
                    Elephants have long trunks, big ears, and strong tusks.`,
    },
    {
      id: 4,
      title: "Cheetah",
      img: "/src/assets/cheetah.jpg",
      images: [
        "/src/assets/Cheetah1.webp",
        "/src/assets/Cheetah2.jpg",
        "/src/assets/Cheetah3.jpg",
        "/src/assets/Cheetah4.jpg",
        "/src/assets/Cheetah5.jpg",
      ],
      paragraph:  ` 
                    A cheetah is the fastest land animal.
                    Cheetahs live mostly alone or in small groups called coalitions.
                    They are carnivores and hunt animals like gazelles.
                    Cheetahs have slender bodies, long legs, and distinctive black tear marks on their faces.`,
    },
    {
       id: 5,
      title: "Giraffe",
      img: "/src/assets/giraffe.jpg",
      images: [
        "/src/assets/Giraffe1.jpg",
        "/src/assets/Giraffe2.webp",
        "/src/assets/Giraffe3.jpg",
        "/src/assets/Giraffe4.jpeg",
        "/src/assets/Giraffe5.jpg",
      ],
      paragraph: `A giraffe is the tallest animal on land.  
    It eats leaves and fruits from tall trees and loves to stretch its long neck.  
    Giraffes live in groups called towers and have pretty spots all over their bodies.`,
    },
    {
      id: 6,
      title: "Dog",
      img: "/src/assets/dog.jpg",
      images: [
        "/src/assets/Dog2.jpg",
        "/src/assets/Dog1.webp",
        "/src/assets/Dog3.webp",
        "/src/assets/Dog4.avif",
        "/src/assets/Dog5.jpg",
      ],
      paragraph:  `A dog is a friendly animal.  
                   Dogs eat meat, dog food, and sometimes vegetables.  
                   They live with people as pets.  
                   Dogs can bark, run, and play.  
                   They are loyal and love to be with their family`,
    },
    {
       id: 7,
      title: "Cat",
      img: "/src/assets/Cat.jpg",
      images: [
        "/src/assets/Cat1.jpg",
        "/src/assets/Cat2.jpg",
        "/src/assets/Cat3.jpg",
        "/src/assets/Cat4.webp",
        "/src/assets/Cat5.jpg",
      ],
      paragraph: `A cat is a small, playful animal. Cats eat meat and sometimes milk.
      They live with people as pets. Cats can purr, jump, and run very fast.
      They are curious and like to explore.`,
    },
    {
      id: 8,
      title: "Kangaroo",
      img: "/src/assets/kangaroo.jpg",
      images: [
         "/src/assets/Kangaroo1.avif",
        "/src/assets/Kangaroo2.jpg",
        "/src/assets/Kangaroo3.jpg",
        "/src/assets/Kangaroo4.jpeg",
        "/src/assets/Kangaroo5.jpeg",
      ],
      paragraph:  `
                 A kangaroo is a jumping animal from Australia.  
                 Kangaroos eat grass, leaves, and plants.  
                 They have strong back legs and big feet.  
                 Kangaroos carry their babies in a pouch.  
                 They can hop very fast and far.`,
    },
    {
       id: 9,
      title: "Panda",
      img: "/src/assets/panda.webp",
      images: [
         "/src/assets/Panda1.avif",
        "/src/assets/Panda2.jpg",
        "/src/assets/Panda3.webp",
        "/src/assets/Panda4.webp",
        "/src/assets/Panda5.jpg",
      ],
      paragraph: `
       A panda is a black and white bear.  
      Pandas eat mostly bamboo and plants.  
      They live in forests and mountains.  
      Pandas are gentle and like to play.  
      They are very cute and loved by people.`,
    },
    {
      id: 10,
      title: "Zebra",
      img: "/src/assets/zebra.webp",
      images: [
         "/src/assets/Zebra1.jpeg",
        "/src/assets/Zebra2.webp",
        "/src/assets/Zebra3.webp",
        "/src/assets/Zebra4.jpeg",
        "/src/assets/Zebra5.jpg",
      ],
      paragraph:  ` 
      A zebra is a striped animal.  
      Zebras eat grass and plants.  
      They live in groups called herds.  
      Zebras have black and white stripes all over their bodies.  
      They can run very fast to stay safe from predators.`,
    },
    
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const openModal = (animal) => {
    window.speechSynthesis.cancel();
    setSelectedAnimal(animal);
    const utterance = new SpeechSynthesisUtterance(animal.title);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setSelectedAnimal(null);
  }

  return (
    <>
    <div className="heading8"><h2>Animals</h2></div>
      <div className="container1">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="card1"
            onClick={() => openModal(animal)}
          >
            <img src={animal.img} alt={animal.title} />
            <h3>{animal.title}</h3>
          </div>
        ))}
      </div>
      {selectedAnimal && (
        <div className="animal-modal-overlay" onClick={closeModal}>
          <div
            className="animal-modal-content"
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
              className="animal-swiper"
            >
              {selectedAnimal.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${selectedAnimal.title} ${i + 1}`}
                    className="animal-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="animal-card">
              <div className="animal-header">
                <h2>{selectedAnimal.title}</h2>
                <SoundButton text={selectedAnimal.paragraph} />
              </div>
              <p>{selectedAnimal.paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
