"use client";
import CourseCard from "@/components/CourseCard";
import React, { useEffect, useState } from "react";
export default function page() {
  const categories = ["All", "Technology", "Business", "Design", "Marketing"];
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch(
        "https://study-pal-server-api.vercel.app//all-courses"
      );
      const data = await res.json();
      setAllCourses(data);
    };
    getCourses();
  }, []);
  return (
    <div>
      <h1 className="text-6xl font-black mb-4 text-center">All Courses</h1>
      <p className="text-xl text-gray-800 mb-10 text-center">
        Kickstart your career with interactive projects. <br></br>
        The journey to your professional career.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-white shadow rounded-xl w-full max-w-3xl mx-auto mb-20">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-primary w-full md:w-2/3"
        />

        {/* Category Dropdown */}
        <select className="select select-bordered select-primary w-full md:w-1/3">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* Search Button */}
        <button className="btn btn-primary px-6 rounded-3xl hover:bg-secondary transition-all duration-200">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allCourses.map((course) => {
          return <CourseCard key={course.title} course={course}></CourseCard>;
        })}
      </div>
    </div>
  );
}
