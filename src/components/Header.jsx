import React from "react";
import Image from "next/image";
import banner from "../assets/banner.png";
export default function Header() {
  return (
    <div className="flex items-center justify-between md:gap-30 mb-20">
      <div>
        <h1 className="text-6xl font-black mb-4">StudyPAL</h1>
        <p className="text-xl text-gray-800 mb-10">
          Kickstart your career with interactive projects. <br></br>
          The journey to your professional career.
        </p>
        <button className="btn btn-primary text-white rounded-4xl hover:bg-secondary px-8 py-6 text-lg">
          Enroll Now
        </button>
      </div>
      <div>
        <Image src={banner} alt="Banner Image" className="min-w-120"></Image>
      </div>
    </div>
  );
}
