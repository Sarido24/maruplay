import { useDispatch, useSelector } from "react-redux";
import {
  addToMyCart,
  fetchCartSuccess,
  setCartDataModal,
  setOpenCartModal,
} from "../store/cart-slice";
import { useNavigate } from "react-router-dom";

export default function Card({ props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openCartModal = useSelector((state) => state.carts.openCartModal);
  const { name, imgUrl, description, price, stock, id } = props;

  function handleAddChart() {
    if (localStorage.getItem("access_token")) {
      dispatch(setCartDataModal(props));
      dispatch(setOpenCartModal(!openCartModal));
    }
    // dispatch(addToMyCart(props))
  }

  return (
    <div className="flex relative flex-col border-2 border-slate-300 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer">
      <div className="h-[50%] flex flex-col items-center ">
        <img src={imgUrl} alt="" className="h-full p-5 " />
      </div>
      <div className="h-[40%] flex flex-col justify-center items-center gap-4 font-semibold text-slate-700">
        <h1 className="text-sm md:text-2xl text-center">{name}</h1>
        <p>Stock : {stock}</p>
        <p>Rp. {price}</p>
      </div>
      <div className="flex w-full gap-5 text-sm md:text-xl justify-center ">
        <button
          onClick={handleAddChart}
          className="hover:text-blue-700 transition-all duration-500 hover:scale-110 active:scale-125"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button  onClick={() => {
          navigate("/pubProducts/" + props.id);
        }} className="hover:text-blue-700 transition-all duration-500 hover:scale-110 active:scale-125">
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
  );
}
