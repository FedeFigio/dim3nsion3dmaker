"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav className={`fixed z-40 w-full ${ scrolled ? "bg-black" : ""} transition-all`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => {
                  setShow(!show);
                }}
                type="button"
                className="relative z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link
                  className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white"
                  href="/"
                >
                  <img
                    className="h-8 w-auto hidden sm:block"
                    src="/logo-4.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white"
                    href="/"
                  >
                    HOME
                  </Link>
                  <Link
                    disabled
                    className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white opacity-50"
                    href="#"
                  >
                    CHI SIAMO
                  </Link>
                  <Link
                    className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white opacity-50"
                    href="#"
                  >
                    SERVIZI
                  </Link>
                  <Link
                    className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white"
                    href="/contacts"
                  >
                    CONTATTI
                  </Link>
                  <Link
                    className=" rounded-md px-3 py-2 text-xl font-bold  text-white hover:bg-gray-700 hover:text-white opacity-50"
                    href="#"
                  >
                    F.A.Q.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {show && (
          <div
            className="sm:hidden bg-menu h-screen w-screen fixed top-0"
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-center gap-8 pt-8">
              <Link
                onClick={toggle}
                className="rounded-md px-3 py-2 text-sm  text-white hover:bg-gray-700 hover:text-white"
                href="/"
              >
                HOME
              </Link>
              <Link
                onClick={toggle}
                className="rounded-md px-3 py-2 text-sm  text-white hover:bg-gray-700 hover:text-white opacity-50"
                href="#"
              >
                CHI SIAMO{" "}
              </Link>
              <Link
                onClick={toggle}
                className="rounded-md px-3 py-2 text-sm  text-white hover:bg-gray-700 hover:text-white opacity-50"
                href="#"
              >
                SERVIZI{" "}
              </Link>
              <Link
                onClick={toggle}
                className="rounded-md px-3 py-2 text-sm  text-white hover:bg-gray-700 hover:text-white"
                href="/contacts"
              >
                CONTATTI
              </Link>
              <Link
                onClick={toggle}
                className="rounded-md px-3 py-2 text-sm  text-white hover:bg-gray-700 hover:text-white opacity-50"
                href="#"
              >
                F.A.Q.
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
