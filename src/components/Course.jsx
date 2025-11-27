"use client";
import React from "react";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Course({ course, onEnroll, onDetails }) {
  const startDate = new Date(course.classStarts);
  const formattedDate = startDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-black/5 flex flex-col hover:-translate-y-2.5 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="relative h-44 sm:h-52 w-full bg-gray-50">
        <img
          src={course.image}
          alt={`${course.title} course cover`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col grow">
        <header className="mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            {course.title}
          </h3>
        </header>

        <div className="flex items-center text-sm text-slate-600 mb-4 mt-auto">
          <Calendar className="w-4 h-4" />
          <span className="ml-2">
            Class starts{" "}
            <strong className="text-slate-800">{formattedDate}</strong>
          </span>
        </div>
        {/* This now pushes DOWN correctly */}

        <div className="flex gap-3">
          <button className="flex-1 btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold btn-primary hover:bg-secondary text-white">
            Enroll <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
