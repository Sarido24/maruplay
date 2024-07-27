import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-950 text text-white sticky top-0">
      <div className="h-[20%] border-b border-slate-700 flex justify-evenly p-2">
        <div className="text-sm md:text-md lg:text-lg">
          <p>wellcome to the world of toys</p>
        </div>
        <div className="justify-between gap-10 hidden lg:flex">
          <p>+62 0857611788</p>
          <p>user@mail.com</p>
          <p>account</p>
        </div>
      </div>
      <div className="flex h-[62px] justify-between items-center">
        <h1 className="text-sky-600 text-3xl px-5">
          maru<span className="text-white">PLAY</span>
        </h1>
        <div className="flex w-28 gap-3 p-5">
          <span className="">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="active::text-gray-600">
            <i className="fa-regular fa-heart"></i>
          </span>
          <span onClick={()=>{
            setIsOpen(!isOpen)
          }} className="md:hidden lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
      <form className="flex justify-center p-5 rounded-xl ">
        <input
          placeholder="search"
          type="text"
          className="w-[80%] px-3 rounded-l-md text-black focus:border-none focus:outline-none"
        />
        <button className="h-full bg-sky-600 px-5 py-2 text-2xl rounded-r-md">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="h-[50vh] bg-blue-400 w-[30%]">
      </div>
    </div>

  );
}
