import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  video: string;
}

// Validate or transform courseData to match Course interface
const courses = (courseData as { courses?: unknown }).courses;
const validatedCourses: Course[] = Array.isArray(courses)
  ? courses.map((course: unknown) => {
      // Handle cases where 'image' is used instead of 'video'
      const { image, ...rest } = course as any;
      return {
        ...rest,
        video: image || (rest as any).video || "/courses/placeholder.mp4", // Fallback to placeholder
      } as Course;
    })
  : [];

function FeaturedCourses() {
  const featuredCourses = validatedCourses.filter(
    (course) => course.isFeatured
  );

  if (featuredCourses.length === 0) {
    return (
      <div className="py-12 bg-gray-900 text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED LESSONS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Master Music With the Masters ... !
        </p>
        <p className="mt-4 text-neutral-400">
          No featured courses available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED LESSONS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Master Music With the Masters ... !
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="relative w-full h-48">
                  <video
                    aria-label={`Preview of ${course.title}`}
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/courses/placeholder.jpg"
                    className="w-full h-full object-cover rounded-t-[22px]"
                  >
                    <source src={course.video} type="video/mp4" />
                    <img
                      src="/courses/placeholder.jpg"
                      alt={`Fallback for ${course.title}`}
                      className="w-full h-full object-cover rounded-t-[22px]"
                    />
                  </video>
                </div>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-amber-500"
                    aria-label={`Learn more about ${course.title}`}
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
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
  );
}

export default FeaturedCourses;
