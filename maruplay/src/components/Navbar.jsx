import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="bg-gray-950 text text-white">
      <div className="h-[20%] border-b border-slate-700 flex justify-evenly p-2">
        <div className="text-sm md:text-md lg:text-lg">
          <p>wellcome to the world of toys</p>
        </div>
        <div className="justify-between gap-10 hidden lg:flex text-gray-500">
          <p className="">
            <i class="fa-solid fa-phone"></i> +62 0857611788
          </p>
          <p className="px-2 border-x border-gray-500">
            <i class="fa-solid fa-envelope"></i> user@mail.com
          </p>

          <div className="flex flex-col">
            <p onClick={()=>{
              setAccountOpen(!accountOpen)
            }} className="cursor-pointer hover:text-white">
              <i class="fa-solid fa-user"></i> account
            </p>
            {accountOpen && (
              <div className="flex flex-col fixed top-10 bg-white text-black p-5">
                <Link to={"/login"}>Sign in</Link>
                <Link>Sign Up</Link>
                <Link>Sign Out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex h-[62px] justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-sky-600 text-3xl px-5">
            maru<span className="text-white">PLAY</span>
          </h1>
        </Link>
        <div className="flex w-28 gap-3 md:gap-6 md:py-10">
          <span className="hover:text-sky-500 md:text-xl lg:text-2xl">
            <i className="fa-solid fa-cart-shopping "></i>
          </span>
          <span className="hover:text-sky-500 md:text-xl lg:text-2xl">
            <i className="fa-regular fa-heart"></i>
          </span>
          <span
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden lg:hidden active:text-sky-500"
          >
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
      <form className="flex justify-center p-5 rounded-xl ">
        <input
          placeholder="search"
          type="text"
          className="w-[80%] md:w-[50%] lg:w-[40%] px-3 rounded-l-md text-black focus:border-none focus:outline-none"
        />
        <button className="h-full bg-sky-600 px-5 hover:bg-blue-500 active:bg-blue-700 py-2 text-2xl rounded-r-md">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="hidden md:flex lg:flex justify-center">
        <div className="w-[80%] bg-sky-600 p-3 flex justify-center gap-16">
          <Link to={"/"}>Home</Link>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div
        className={`min-h-screen bg-gray-500 w-[70%] fixed z-20 top-10 left-0 text-white p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end py-1 text-lg">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="bg-blue-500 active:bg-sky-900 py-2 px-4 rounded-full"
          >
            <span>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-3 border-y py-5">
          <p className="flex gap-6">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span>+62 85877689900</span>
          </p>
          <p className="flex gap-6">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>userExample@mail.com</span>
          </p>
          <p className="flex gap-6">
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <span>account</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 py-5">
          <a
            className="active:text-sky-400 border-b  py-1 flex justify-between"
            href="#"
          >
            <p>Home</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="active:text-sky-400 border-b  py-1 flex justify-between"
            href="#"
          >
            <p>Products</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="active:text-sky-400 border-b  py-1 flex justify-between"
            href="#"
          >
            <p>About Us</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="active:text-sky-400 border-b  py-1 flex justify-between"
            href="#"
          >
            <p>Contact Us</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
