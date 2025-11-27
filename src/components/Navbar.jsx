"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-99 mb-20 navbar sticky top-0 text-primary px-10 transition-all duration-300 shadow-sm ${
        scrolled ? "backdrop-blur-lg bg-base-100/70" : "bg-base-100"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link prefetch={false} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/all-courses">
                All Courses
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/user-reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/contact">
                Contact US
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link prefetch={false} href="/" className="font-bold text-2xl">
          StudyPAL
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link prefetch={false} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/all-courses">
              All Courses
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/user-reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/contact">
              Contact US
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {isSignedIn ? (
          <div className="dropdown dropdown-end">
            {/* Dropdown button with hamburger icon */}
            <div
              tabIndex={0}
              className="btn btn-primary rounded-4xl px-6 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-2"
            >
              <li className="font-bold py-2 px-3">{user?.fullName}</li>
              <li>
                <Link href="/add-courses" className="py-2 px-3">
                  Add Course
                </Link>
              </li>
              <li>
                <Link href="/manage-courses" className="py-2 px-3">
                  Manage Courses
                </Link>
              </li>
              <li>
                <SignOutButton>
                  <button className="w-full text-left py-2 px-3">Logout</button>
                </SignOutButton>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            prefetch={false}
            href="/login"
            className="btn text-white btn-primary rounded-4xl px-8 hover:bg-secondary transition-all duration-200 ease-in-out"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
