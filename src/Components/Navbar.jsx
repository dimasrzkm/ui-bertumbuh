import React from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Container from "./Container";

export default function Navbar() {
  return (
    <div className="shadow-lg shadow-gray-300/30">
      <Container>
        <div className="flex items-center gap-3 justify-between sm:justify-start sm:py-10">
          <Bars3Icon className="w-12 h-12 stroke-2 sm:hidden" />
          <img
            src="./src/assets/logo-bertumbuh.png"
            alt=""
            className="order-3 sm:order-1"
          />
          <h1 className="order-2 font-semibold text-3xl text-slate-800 sm:text-xl">
            BERTUMBUH
          </h1>
          <div className="hidden lg:flex lg:items-center lg:gap-3 lg:text-neutral-500 lg:font-medium lg:order-2">
            <h3>Programs</h3>
            <ChevronDownIcon className="w-4 h-4 mt-1 -ml-2" />
          </div>
          <div className="hidden sm:ml-auto sm:flex sm:gap-3 sm:order-3">
            <label className="hidden relative text-gray-400 focus-within:text-gray-600 lg:block">
              <MagnifyingGlassIcon className="fill-slate-500 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 hover:cursor-pointer" />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Cari blog dan artikel disini..."
                className="hidden lg:block lg:w-[400px] bg-slate-100 focus:ring-0 focus:border-none border-none"
              />
            </label>
            <button
              type="button"
              className="hidden md:block py-2 px-4 bg-custom-green-900 text-white shadow-custom-green-900/20 shadow-lg tracking-wide sm:block"
            >
              Bergabung
            </button>
          </div>
        </div>
      </Container>
      <hr className="hidden sm:block border-slate-500 border-1" />
      <Container className="hidden sm:block lg:block">
        <Bars3Icon className="w-12 h-12 stroke-2 lg:hidden" />
        <nav className="py-5  gap-6 text-neutral-500 font-medium sm:hidden lg:flex">
          <a href="#">Home</a>
          <a href="#">Kemitraan</a>
          <a href="#">Tentang</a>
          <a href="#">Kami Butuh Kamu</a>
          <a href="#">Post</a>
          <a href="#">Newsletter</a>
        </nav>
      </Container>
    </div>
  );
}
