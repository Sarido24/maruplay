import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCart } from "../store/cart-slice";

export default function Chart() {
  const dispatch = useDispatch();
  const myChartData = useSelector((state) => state.carts.myCart);

  useEffect(() => {
    dispatch(fetchMyCart());
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-2xl font-bold p-2">Your Chart</h1>
      <div className="w-full flex flex-col gap-1 uppercase">
        <div className="grid grid-cols-4 gap-1 h-[50px] px-5 text-white bg-blue-400">
          <div className="flex justify-center h-[50px] items-center  ">
            <h1>Image</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Product Name</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Quantity</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>Subtotal</h1>
          </div>
        </div>

        {myChartData?.map((el, i) => {
          return (
            <>
              <div key={i} className="grid grid-cols-4 gap-1 h-[200px] px-5 ">
                <div className="flex justify-center h-[200px] items-center bg-slate-200">
                  <img
                    className="h-full p-5"
                    src={el.Product.imgUrl}
                    alt="gambar tidak ditemukan"
                  />
                </div>
                <div className="flex justify-center items-center bg-slate-200">
                  <h1 className="font-semibold">{el.Product.name}</h1>
                </div>
                <div className="flex justify-center items-center bg-slate-200">
                  <input
                    type="number"
                    value={el.quantity}
                    className="w-24 text-black px-5 py-2 rounded-md outline-none border border-blue-400"
                  />
                </div>
                <div className="flex justify-center items-center bg-slate-200">
                  <h1>Rp. {el.Product.price}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
