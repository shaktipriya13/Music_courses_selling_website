"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Exploring Chord Progressions",
      description:
        "Unlock the secrets of harmony and learn how to build powerful chord progressions.",
      slug: "exploring-chord-progressions",
      isFeatured: true,
    },
    {
      title: "Lyric Writing Masterclass",
      description:
        "Discover how to craft meaningful lyrics that resonate with your audience.",
      slug: "lyric-writing-masterclass",
      isFeatured: true,
    },
    {
      title: "Instrumental Improvisation Techniques",
      description:
        "Learn to express yourself through spontaneous and creative instrumental playing.",
      slug: "instrumental-improvisation-techniques",
      isFeatured: true,
    },
    {
      title: "Home Studio Setup Guide",
      description:
        "Set up your own professional-sounding home studio without breaking the bank.",
      slug: "home-studio-setup-guide",
      isFeatured: true,
    },
    {
      title: "Stage Presence & Confidence",
      description:
        "Build your on-stage confidence and captivate your audience during live shows.",
      slug: "stage-presence-confidence",
      isFeatured: true,
    },
    {
      title: "Social Media for Musicians",
      description:
        "Boost your music career by mastering the art of music promotion on social platforms.",
      slug: "social-media-for-musicians",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            JOIN OUR LIVE WEBINARS{" "}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Level Up Your Music Skills{" "}
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinar/${webinar.slug}`, // Use unique slug for link
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.5rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold 
            transform transition-transform duration-300 hover:scale-105"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
