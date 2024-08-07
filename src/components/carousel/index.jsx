// components/Carousel.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: auto;
  border-radius: 15px; // Tambahkan border-radius di sini
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 1.5s ease-in-out;
  width: 100%;
  height: 100%;
`;

const CarouselItem = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px; // Tambahkan border-radius di sini
`;

const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  font-size: 5rem;
  font-weight: 700;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/assets/carousel4.jpeg', desc: 'Marching Band' },
    { src: '/assets/carousel5.jpeg', desc: 'Paskibra' },
    { src: '/assets/carousel6.jpeg', desc: 'Futsal' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselContainer>
      <CarouselInner style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselItem key={index} style={{ backgroundImage: `url(${image.src})` }}>
            <Description>{image.desc}</Description>
          </CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;
