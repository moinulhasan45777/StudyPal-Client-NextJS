import React from "react";
import Image from "next/image";
import banner from "../assets/banner.png";
export default function Header() {
  return (
    <div className="flex items-center justify-between md:gap-30 mb-20 flex-col-reverse gap-10 md:flex-row">
      <div>
        <h1 className="md:text-6xl text-5xl font-black mb-4">StudyPAL</h1>
        <p className="md:text-xl text-lg text-gray-800 mb-10">
          Kickstart your career with interactive projects. <br></br>
          The journey to your professional career.
        </p>
        <button className="btn btn-primary text-white rounded-4xl hover:bg-secondary px-8 py-6 text-lg">
          Enroll Now
        </button>
      </div>
      <div>
        <Image
          src={banner}
          alt="Banner Image"
          className="min-w-50 md:min-2-120"
        ></Image>
      </div>
    </div>
  );
}
