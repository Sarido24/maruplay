import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchPubProducts, searchProduct } from "../store/products-slice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    Swal.fire({
      title: "Are you sure to log out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Log Out!",
          icon: "success",
        });
        localStorage.removeItem("access_token");
        localStorage.removeItem("userLogin");
        setAccountOpen(false);
        navigate("/login");
      }
    });

    navigate("/login");
  }
  
  console.log(search);

  function handleChangeSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }

  function handleSearch(e) {
    e.preventDefault()
    if (search) {
      dispatch(searchProduct(search));
    }else{
      dispatch(fetchPubProducts())
    }
  }

  return (
    <>
      <div className="bg-gray-950 text text-white pb-3 sticky top-0 z-50 md:static">
        <div className="h-[20%] border-b border-slate-700 flex justify-evenly p-2 ">
          <div className="text-sm md:text-md lg:text-lg">
            <p>wellcome to the world of toys</p>
          </div>
          <div className="justify-between gap-10 hidden lg:flex text-gray-500">
            {localStorage.getItem("access_token") && (
              <>
                <p className="">
                  <i className="fa-solid fa-phone"></i> +62 0857611788
                </p>
                <p className="px-2 border-x border-gray-500">
                  <i className="fa-solid fa-envelope"></i>{" "}
                  {localStorage.getItem("userLogin")}
                </p>
              </>
            )}

            <div className="flex flex-col">
              <p
                onClick={() => {
                  setAccountOpen(!accountOpen);
                }}
                className="cursor-pointer hover:text-white"
              >
                <i className="fa-solid fa-user"></i> account
              </p>
              {accountOpen && (
                <div className="flex flex-col fixed top-10 bg-white text-black p-5">
                  {localStorage.getItem("access_token") && (
                    <button onClick={handleLogout}>Sign Out</button>
                  )}
                  {!localStorage.getItem("access_token") && (
                    <div className="flex flex-col">
                      <Link to={"/login"}>Sign in</Link>
                      <Link to={"/register"}>Sign Up</Link>
                    </div>
                  )}
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
              <Link to={"/chart"}>
                <i className="fa-solid fa-cart-shopping "></i>
              </Link>
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
            onChange={handleChangeSearch}
            placeholder="search"
            type="text"
            className="w-[80%] md:w-[50%] lg:w-[40%] px-3 rounded-l-md text-black focus:border-none focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="h-full bg-sky-600 px-5 hover:bg-blue-500 active:bg-blue-700 py-2 text-2xl rounded-r-md"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

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
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-3 border-y py-5">
            <p className="flex gap-6">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>+62 85877689900</span>
            </p>
            <p className="flex gap-6">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>{localStorage.getItem("userLogin")}</span>
            </p>
            <div className="flex gap-6">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <span
                onClick={() => {
                  setAccountOpen(!accountOpen);
                }}
                className="cursor-pointer"
              >
                account
              </span>
              {accountOpen && (
                <div className="flex flex-col fixed top-30 right-2 bg-white text-black p-5">
                  {localStorage.getItem("access_token") && (
                    <button onClick={handleLogout}>Sign Out</button>
                  )}
                  {!localStorage.getItem("access_token") && (
                    <div className="flex flex-col">
                      <Link to={"/login"}>Sign in</Link>
                      <Link to={"/register"}>Sign Up</Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5">
            <Link
              to={"/"}
              className="active:text-sky-400 border-b  py-1 flex justify-between"
            >
              <p>Home</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to={"/pubProducts"}
              className="active:text-sky-400 border-b  py-1 flex justify-between"
            >
              <p>Products</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <a
              className="active:text-sky-400 border-b  py-1 flex justify-between"
              href="#"
            >
              <p>About Us</p>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="active:text-sky-400 border-b  py-1 flex justify-between"
              href="#"
            >
              <p>Contact Us</p>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:flex justify-center sticky top-0 z-50">
        <div className="w-full bg-sky-600 p-3 flex justify-center gap-16 text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/pubProducts"}>Products</Link>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </>
  );
}
