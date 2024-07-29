import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    // setError(null);
    const name = e.target.name;
    const value = e.target.value;

    setDataLogin({
        ...dataLogin,
        [name]:value
    })
  }

  console.log(dataLogin);
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center h-[100vh] bg-secondary md:bg-white">
        <div className="flex flex-col items-center h-[50vh] md:h-[70vh] md:w-[70vh] md:bg-secondary md:shadow-xl">
          <h1 className="text-3xl font-bold text-center p-10 text-sky-500">
            Login
          </h1>
          {/* {loading&& <p>Loading...</p>}
      {error&& <p className="text-red-500">{error.message}</p>} */}
          <div className=" h-[700px] p-10">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="relative z-10">
                <input
                  onChange={handleSubmit}
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="block pl-10 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6"
                />
                <span className="absolute top-0 p-3">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
              <div className="relative z-10">
                <input
                  onChange={handleSubmit}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="block pl-10 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6"
                />
                <span className="absolute top-0 p-2">
                  <i class="fa-solid fa-key"></i>
                </span>
              </div>

              <div className="flex justify-evenly py-10 gap-5">

                <button
                  // onClick={handleLogin}
                  className="p-2 bg-sky-600 hover:transition-transform hover:scale-105 hover:duration-500  text-white rounded-md w-16"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
