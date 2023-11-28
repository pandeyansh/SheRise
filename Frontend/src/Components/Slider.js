import React, { useState, useEffect } from "react";
import "./Slider.css";
const testimonialsData = [
  {
    image: 'https://inspirlang.com/wp-content/uploads/2020/09/edited-portrait-1-2-1-1024x1024.png',
    name: 'Emily Williams',
    title: 'Student',
    text: 'The experience I had with SheRise greatly sharpened my job searching skills and helped me in my technical interview rounds.',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.DCXXcS5eBdU4tkGERlfNOwAAAA?pid=ImgDet&rs=1',
    name: 'Madison Thompson',
    title: 'Frontend Developer Intern',
    text: 'Despite being from a tier 3 college, I would like to thank my mentors & developers at SheRise who helped me land a job at Microsoft. All the mentors here are brilliant.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMVM9oDxuTVLaEL8sAyMfO6Ks1iGx-hdofjq2vYxeCd4s7D-IjX1-ZUQOFUrCOKaOmoo&usqp=CAU',
    name: 'Olivia Johnson',
    title: 'Student',
    text: 'The experience I had with SheRise greatly sharpened my job searching skills and helped me in my technical interview rounds.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH-1O1vJrO7JES9PymGvX2EBW942VbepT8u_KIg9_D4zpyRobQ9O-JYvCy5HjBzfz5xQ&usqp=CAU',
    name: 'Sophia Rodriguez',
    title: 'UI/UX Intern',
    text: 'My experience with SheRise was wonderful. The mentors here are amazing. I would definitely recommend SheRise.',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.Xz5vMxe_GeMFWWaSNxVYAwHaHa?pid=ImgDet&w=751&h=751&rs=1',
    name: 'Isabella Garcia',
    title: 'Backend Developer Intern',
    text: 'It has been a crazy ride from being a novice CS student to a 6-star Coder and ICPC Regionalist. I would like to thank SheRise for helping a Tier-3 college student explore such opportunities.',
  },
  {
    image: 'https://www.harborsidechurch.org/wp-content/uploads/2019/01/Kaylyn-300x298.png',
    name: 'Charlotte Martinez',
    title: 'Student',
    text: 'The experience I had with SheRise greatly sharpened my job searching skills and helped me in my technical interview rounds.',
  },
];
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentTestimonial = testimonialsData[currentIndex];
  return (
    <div className="slider-container">
      <button className="prev" onClick={goToPrevious} title="Prev">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="prev-btn"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={currentTestimonial.image} alt={currentTestimonial.name} />
          <div className="name">
            <p>{currentTestimonial.name}</p>
            <p className="title">{currentTestimonial.title}</p>
          </div>
        </div>
        <div className="testimonial-quote">
          <p className="text">{currentTestimonial.text}</p>
          <div className="quote-icon">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="1em" width="1em"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>
          </div>
        </div>
      </div>
      <button className="next" onClick={goToNext} title="Next">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="next-btn"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
export default Slider;