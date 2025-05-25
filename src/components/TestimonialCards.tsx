"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Enrolling in this music school changed how I approach the guitar. I now feel deeply connected with every note I play. The instructors are not just teachers—they're mentors!",
    name: "Arjun Mehta",
    title: "Guitar Student",
  },
  {
    quote:
      "From struggling with basic chords to performing confidently on stage, this school has helped me evolve as a keyboardist and as a person.",
    name: "Priya Nair",
    title: "Keyboard Student",
  },
  {
    quote:
      "I always loved singing, but lacked the confidence. The vocal training here helped me find my true voice and the courage to share it with the world.",
    name: "Rohit Sharma",
    title: "Vocal Student",
  },
  {
    quote:
      "Learning the violin here has been an incredible journey. The attention to detail and one-on-one mentoring made all the difference for me.",
    name: "Ananya Deshpande",
    title: "Violin Student",
  },
  {
    quote:
      "The music production classes opened a whole new world for me. I’ve started creating my own tracks and exploring sounds I never knew I could make.",
    name: "Kabir Iyer",
    title: "Music Production Student",
  },
  {
    quote:
      "As a tabla player, I always wanted structured guidance. This school gave me clarity, rhythm, and a deep appreciation for Indian classical percussion.",
    name: "Devansh Kulkarni",
    title: "Tabla Student",
  },
  {
    quote:
      "The environment is so inspiring! I’ve been learning Hindustani vocals, and every class feels like a soulful experience. Truly blessed to be here.",
    name: "Meera Joshi",
    title: "Hindustani Vocal Student",
  },
  {
    quote:
      "The school encouraged me to pursue music alongside my college studies. Now, I'm composing my own background scores for short films!",
    name: "Sahil Verma",
    title: "Composition Student",
  },
  {
    quote:
      "As a Carnatic violinist, I found my roots strengthened here. The mentors respect tradition while also encouraging innovation. It’s the best of both worlds.",
    name: "Lakshmi Narayanan",
    title: "Carnatic Violin Student",
  },
  {
    quote:
      "Their approach to harmonium and Indian classical theory is both modern and rooted in tradition. I’ve grown as a performer and composer thanks to them.",
    name: "Riya Banerjee",
    title: "Harmonium Student",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div
      className={cn(
        "relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden",
        "bg-white dark:bg-black",
        "[background-size:20px_20px]",
        "[background-image:linear-gradient(to_right,#006766_1px,transparent_1px),linear-gradient(to_bottom,#006766_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#009688_1px,transparent_1px),linear-gradient(to_bottom,#009688_1px,transparent_1px)]"
      )}
    >
      {/* Radial gradient mask for faded effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <h2 className="relative z-10 text-4xl font-bold text-center mb-8 text-amber-50">
        Echoes of Excellence : Our Students Speak
      </h2>
      <div className="relative z-10 flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
