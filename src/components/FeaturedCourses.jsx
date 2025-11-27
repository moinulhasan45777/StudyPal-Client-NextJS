"use client";

import React, { useEffect, useState } from "react";
import Course from "./Course";

export default function FeaturedCourses() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("http://localhost:4500/all-courses");
      const data = await res.json();
      setAllCourses(data);
    };
    getCourses();
  }, []);

  return (
    <div className="mb-20">
      <h2 className="text-center text-4xl font-bold mb-15">Featured Courses</h2>
      <div className="flex justify-between gap-10">
        {allCourses.slice(0, 4).map((course) => {
          return <Course key={course._id} course={course}></Course>;
        })}
      </div>
    </div>
  );
}
