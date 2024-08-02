import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    // setError(null);
    sessionStorage.removeItem("errorPageMessage")
    const name = e.target.name;
    const value = e.target.value;

    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  }

  async function login(data) {
    try {
      setLoading(true);
      const response = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/login",
        data,
      });
      if (response.statusText === "OK") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login success",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("access_token", response.data.access_token);
        const decoded = jwtDecode(response.data.access_token);
        console.log(decoded);
        localStorage.setItem("userLogin", decoded.email);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e) {
    login(dataLogin);
  }

  //   console.log(dataLogin);
  return (
    <>
      <Navbar />
      {sessionStorage.getItem("errorPageMessage")&& 
      <div className="w-full flex justify-center  p-2 text-white mt-2">
        <h1 className="bg-red-500 p-5 rounded-md" >{sessionStorage.getItem("errorPageMessage")}!!!</h1>
      </div>
      }
      <div className="flex w-full justify-center items-center h-[100vh] bg-secondary md:bg-white">
        <div className="flex flex-col items-center h-[50vh] md:h-[70vh] md:w-[70vh] md:bg-secondary md:shadow-xl rounded-lg">
          <h1 className="text-3xl font-bold text-center p-10 text-sky-500 uppercase">
            Login
          </h1>
          {loading && (
            <div className="h-44 flex justify-center items-center">
              <h1 className="animate-spin text-xl ">
                <i className="fa-solid fa-gear"></i>
              </h1>
            </div>
          )}
          {/* {error && <p className="text-red-500">{error.message}</p>} */}
          <div className=" h-[700px] p-10">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="relative z-10">
                <input
                  onChange={handleChange}
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
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="block pl-10 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6"
                />
                <span className="absolute top-0 p-2">
                  <i className="fa-solid fa-key"></i>
                </span>
              </div>

              <div className="flex justify-evenly py-10 gap-5">
                <button
                  onClick={handleLogin}
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
