"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

//content should be an array of objects
const musicSchoolContent = [
  {
    title: "Unleash Your Inner Musician: A Personalized Path to Mastery",
    description:
      "Begin a musical adventure tailored just for you. Our customized lessons are designed around your unique goals and pace, nurturing creativity while supporting consistent growth. At our music academy, your dreams are the foundation of our teaching approach.",
  },
  {
    title: "Craft Your Musical Identity: Learn Your Way",
    description:
      "Every artist’s journey is different. We offer personalized guidance that evolves with your skills and interests, empowering you to shape your musical identity while enjoying every step of the way.",
  },
  {
    title: "Where Passion Meets Precision: Your Music, Your Rules",
    description:
      "Experience music education that resonates with who you are. Our instructors adapt to your learning style, turning lessons into a meaningful, inspiring journey that fosters both skill and soul.",
  },
  {
    title: "Interactive Learning with Real-Time Feedback",
    description:
      "Stay engaged through a hands-on, collaborative approach. Immediate instructor feedback helps you improve faster and gain a deeper understanding of music theory and performance.",
  },
  {
    title: "Modern Music Education, Evolved for Today",
    description:
      "We keep our curriculum fresh and forward-thinking, integrating the latest techniques, tools, and trends. Learn what matters now—and what will matter tomorrow in the ever-changing world of music.",
  },
  {
    title: "Endless Inspiration, Infinite Possibilities",
    description:
      "Access a wide range of learning materials and courses that spark curiosity and challenge your abilities. With new content always available, your growth never stops.",
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
