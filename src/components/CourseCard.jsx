"use client";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {course.shortDescription}
        </p>

        {/* Bottom Section */}
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex justify-between items-center text-gray-800 font-semibold">
            <span>Fee: {course.fee}</span>
            <span>{course.classStarts}</span>
          </div>

          {/* Details Button */}
          <Link
            prefetch={false}
            href={`/all-courses/${course._id}`}
            className="btn btn-primary rounded-3xl w-full hover:bg-secondary transition-all duration-200"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
