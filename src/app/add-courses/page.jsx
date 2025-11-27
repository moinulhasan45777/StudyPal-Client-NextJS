"use client";

import { useState } from "react";
import { toast } from "react-toastify";
export default function page() {
  const [dateError, setDateError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const fullDescription = form.fullDescription.value;
    const fee = form.fee.value;
    const classStarts = form.classStarts.value;
    const image = form.image.value;

    const currentDate = new Date();

    if (currentDate > new Date(classStarts)) {
      setDateError("Please select a valid Date!");
      return;
    }

    const newCourse = {
      title,
      shortDescription,
      fullDescription,
      fee,
      classStarts,
      image,
    };
    await fetch("http://localhost:4500/add-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    })
      .then(async (res) => await res.json())
      .then(() => {
        toast.success("Successfully Added the Course!");
        form.reset();
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-black mb-6 text-center">Add New Course</h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Course Title *</label>
          <input
            required
            type="text"
            placeholder="Enter course title"
            className="input input-bordered w-full"
            name="title"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold mb-1">
            Short Description *
          </label>
          <textarea
            required
            placeholder="Write a short overview..."
            className="textarea textarea-bordered w-full"
            name="shortDescription"
          ></textarea>
        </div>

        {/* Full Description */}
        <div>
          <label className="block font-semibold mb-1">Full Description *</label>
          <textarea
            required
            placeholder="Provide detailed course information..."
            className="textarea textarea-bordered w-full h-32"
            name="fullDescription"
          ></textarea>
        </div>

        {/* Fee */}
        <div>
          <label className="block font-semibold mb-1">Fee *</label>
          <input
            required
            type="number"
            placeholder="e.g. 150"
            className="input input-bordered w-full"
            name="fee"
          />
        </div>

        {/* Class Starts */}
        <div>
          <label className="block font-semibold mb-1">Class Starts *</label>
          <input
            required
            type="date"
            className="input input-bordered w-full"
            name="classStarts"
            onFocus={() => setDateError("")}
          />
          {dateError && (
            <p className="mt-1 text-sm font-bold text-red-800">{dateError}</p>
          )}
        </div>

        {/* Image URL (Optional) */}
        <div>
          <label className="block font-semibold mb-1">
            Image URL (Optional)
          </label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            name="image"
          />
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full text-white rounded-3xl text-lg py-2 hover:bg-secondary transition">
          Add Course
        </button>
      </form>
    </div>
  );
}
