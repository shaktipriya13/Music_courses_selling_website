"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FloatingNav } from "@/components/ui/floating-nav";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What types of music lessons do you offer?",
    answer:
      "We offer lessons for a variety of instruments including piano, guitar, violin, drums, and voice, as well as music theory and composition classes for all skill levels.",
  },
  {
    question: "Do I need to bring my own instrument?",
    answer:
      "For in-person lessons, we provide instruments like pianos and drums. For other instruments like guitars or violins, we recommend bringing your own, but we have loaner instruments available if needed.",
  },
  {
    question: "Are your lessons suitable for beginners?",
    answer:
      "Absolutely! Our experienced instructors tailor lessons to all skill levels, from complete beginners to advanced musicians, ensuring a supportive learning environment.",
  },
  {
    question: "Can I take lessons online?",
    answer:
      "Yes, we offer both in-person and online lessons via Zoom, allowing you to learn from the comfort of your home with the same high-quality instruction.",
  },
  {
    question: "What is the duration of each lesson?",
    answer:
      "Lessons are typically 30, 45, or 60 minutes, depending on your preference and the instructor's recommendation. We also offer group classes that may vary in length.",
  },
  {
    question: "Do you offer group classes or ensembles?",
    answer:
      "Yes, we provide group classes, workshops, and ensemble opportunities like choirs and bands to foster collaboration and performance skills.",
  },
  {
    question: "How do I sign up for lessons?",
    answer:
      "You can sign up through our website by filling out the registration form or contacting our office directly. We'll match you with an instructor based on your goals and schedule.",
  },
  {
    question: "Are there performance opportunities for students?",
    answer:
      "We host regular recitals, concerts, and community events where students can showcase their talents and gain performance experience.",
  },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact", link: "/contact" },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* <FloatingNav navItems={navItems} className="z-20" /> */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-6">
          🎵 Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Find answers to common questions about our music academy, lessons, and
          programs to help you start your musical journey with confidence.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle>
                  <button
                    className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 dark:text-white"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    )}
                  </button>
                </CardTitle>
              </CardHeader>
              <CardContent
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? Reach out to us!
          </p>
          <Link
            href="/contact"
            className="inline-block text-teal-600 dark:text-teal-400 font-medium hover:underline"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
