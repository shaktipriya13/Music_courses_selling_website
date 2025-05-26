"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function MusicSchoolGallery() {
  const images = [
    "/gallery/classroom.jpg",
    "/gallery/performance.jpg",
    "/gallery/instruments.jpg",
    "/gallery/students-practicing.jpg",
    "/gallery/teacher-session.jpg",
    "/gallery/music-event.jpg",
    "/gallery/recording-studio.jpg",
    "/gallery/group-jam.jpg",
    "/gallery/solo-performance.jpg",
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
  ];

  return (
    <>
      {/* <BackgroundBeamsWithCollision> */}
      <div className="min-h-screen py-12 pt-36 relative">
        <div className="max-w-6xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Our Musical Journey 🎶
          </h1>
          <p className="text-neutral-500 max-w-xl mx-auto my-4 text-sm text-center">
            A glimpse into our vibrant world of melodies, instruments, and
            moments that define the spirit of our academy. Explore the passion
            and creativity of our students and mentors through these snapshots.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </BackgroundBeamsWithCollision> */}
    </>
  );
}

export default MusicSchoolGallery;
