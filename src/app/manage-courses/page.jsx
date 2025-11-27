"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function page() {
  const [allCourses, setAllCourses] = useState([]);
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  // Fetch all courses from backend
  useEffect(() => {
    if (isLoaded && !userId) {
      router.replace("/login"); // redirect to login if not authenticated
    }
    const getCourses = async () => {
      try {
        const res = await fetch(
          "https://study-pal-server-api.vercel.app//all-courses"
        );
        const data = await res.json();
        setAllCourses(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getCourses();
  }, [allCourses, isLoaded, userId, router]);

  // Delete course function
  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://study-pal-server-api.vercel.app//remove-course/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then(() => {
          // Remove deleted course from state
          toast.success("Successfully Deleted The Course!");
          setAllCourses(allCourses.filter((course) => course._id !== id));
        });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-5xl font-black mb-6 text-center">Manage Courses</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        View, manage, and delete your courses easily.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
          >
            {/* Course Image */}
            <img
              src={course.image || "/placeholder.png"}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Course Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-4">{course.title}</h2>

              <div className="flex justify-between gap-2 mt-auto">
                <Link
                  href={`/all-courses/${course._id}`}
                  className="btn btn-primary px-6 rounded-3xl text-white hover:bg-secondary transition-all duration-200 flex-1"
                >
                  View
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="btn bg-red-700 text-white px-6 rounded-3xl hover:bg-red-500 transition-all duration-200 flex-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
