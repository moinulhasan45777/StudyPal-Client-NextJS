"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function page() {
  const { id } = useParams();
  const categories = ["All", "Technology", "Business", "Design", "Marketing"];
  const [course, setCourse] = useState({});
  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch(
        `https://study-pal-server-api.vercel.app//all-courses/${id}`
      );
      const data = await res.json();
      setCourse(data);
    };
    getCourses();
  }, [id]);
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Back Button */}
      <Link
        href="/all-courses"
        className="btn btn-outline mb-6 rounded-3xl px-6"
      >
        ← Back
      </Link>

      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[350px] object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-4xl font-black mb-4">{course.title}</h1>

          {/* Full Description */}
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            {course.fullDescription}
          </p>

          {/* Fee & Start Date */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 rounded-xl p-4 border mb-8">
            <p className="text-lg font-semibold text-gray-800">
              <span className="font-bold">Fee:</span> {course.fee}
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2 md:mt-0">
              <span className="font-bold">Class Starts:</span>{" "}
              {course.classStarts}
            </p>
          </div>

          {/* Enroll Button (UI only) */}
          <button className="btn btn-primary w-full rounded-3xl text-lg py-3 hover:bg-secondary transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
