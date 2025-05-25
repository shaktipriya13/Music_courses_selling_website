"use client";
import React from "react";
import { MovingBorder, Button } from "./ui/moving-border"; // Added Button import
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="orange"
      />
      <div className="text-amber-50 h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Own your Musical🎵 voice...
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
          <span className="font-bold">
            Embark on a transformative musical journey with our all-inclusive
            music courses.
          </span>
          <br /> Whether you're just starting out or aiming to elevate your
          skills, join us and discover the musician within you.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.5rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
            >
              Explore our courses
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
