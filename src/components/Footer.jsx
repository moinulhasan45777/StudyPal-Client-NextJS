import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-white p-10 justify-center gap-10 md:gap-20 xl:gap-40">
      <aside>
        <Link
          href="/"
          className="font-bold text-2xl hover:text-gray-400 transition-all duration-200 ease-in-out"
        >
          StudyPAL
        </Link>
        <p>
          StudyPAL Ltd.
          <br />
          Providing interactive courses since 2016
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Vendor Exam</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
