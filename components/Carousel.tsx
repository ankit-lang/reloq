'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: linear-gradient(to right, #f3f4f6, #e5e7eb);
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? '#F26B22' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const slides = [
  {
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Professional Moving Services",
    description: "Expert movers at your service"
  },
  {
    image: "https://images.pexels.com/photos/4246267/pexels-photo-4246267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Safe & Secure Transport",
    description: "Your belongings, our responsibility"
  },
  {
    image: "https://images.pexels.com/photos/4246147/pexels-photo-4246147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Nationwide Coverage",
    description: "Moving you anywhere in Canada"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CarouselContainer>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].title}</h2>
              <p className="text-xl">{slides[currentIndex].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <CarouselDots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
