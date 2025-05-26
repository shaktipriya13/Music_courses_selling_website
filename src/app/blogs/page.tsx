"use client";
import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

const blogsPosts = [
  {
    title: "🎹 Mastering the Piano: Tips for Beginners",
    description:
      "Embark on your piano journey with essential techniques and practice routines tailored for newcomers.",
    image: "/blogs/piano.jpg",
    date: "Jun 20, 2025",
    slug: "mastering-the-piano",
  },
  {
    title: "🎤 Vocal Warm-ups: Preparing Your Voice",
    description:
      "Discover effective vocal exercises to enhance your singing performance and maintain vocal health.",
    image: "/blogs/msd.jpg",
    date: "Jan 18, 2025",
    slug: "vocal-warmups",
  },
  {
    title: "🎻 Choosing the Right Instrument for You",
    description:
      "A comprehensive guide to selecting the perfect musical instrument that aligns with your interests and goals.",
    image: "/blogs/miss.jpg",
    date: "July 15, 2025",
    slug: "choosing-instrument",
  },
  {
    title: "🥁 Drumming Basics: Rhythm and Control",
    description:
      "Get started with drums by learning rhythm fundamentals, grip techniques, and practice tips for better control.",
    image: "/blogs/drum.jpg",
    date: "Feb 12, 2025",
    slug: "drumming-basics",
  },
  {
    title: "🎼 Reading Sheet Music: A Beginner's Guide",
    description:
      "Learn how to decode sheet music symbols, notes, and timing to improve your sight-reading and musicianship.",
    image: "/blogs/notes.jpg",
    date: "April 10, 2025",
    slug: "reading-sheet-music",
  },
  {
    title: "🎧 Home Recording Studio Setup on a Budget",
    description:
      "Build your own music recording setup without breaking the bank. Learn what equipment is essential and what you can skip.",
    image: "/blogs/rst.jpg",
    date: "Jan 7, 2025",
    slug: "home-recording-setup",
  },
  {
    title: "🎷 Jazz Improvisation: Finding Your Voice",
    description:
      "Explore the art of improvisation in jazz and how to develop your unique musical style and phrasing.",
    image: "/blogs/jazz.jpg",
    date: "March 5, 2025",
    slug: "jazz-improvisation",
  },
  {
    title: "🎶 How to Practice More Effectively",
    description:
      "Maximize your progress with proven techniques for focused and consistent music practice.",
    image: "/blogs/prac.jpg",
    date: "May 2, 2025",
    slug: "practice-effectively",
  },
];

export default function blogsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-6">
          🎶 Read Our blogs
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Explore insights, tips, and stories from our music academy to inspire
          and guide your musical journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date}
                </p>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-block text-teal-600 dark:text-teal-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
