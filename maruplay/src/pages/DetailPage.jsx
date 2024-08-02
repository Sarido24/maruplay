import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPubProductsById } from "../store/products-slice";

export default function DetailPage() {
  const { id } = useParams();
  const detailData = useSelector((state) => state.products.detailProduct);
  const loading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();
  // console.log(id);
  useEffect(() => {
    dispatch(fetchPubProductsById(id));
  }, []);
  console.log(detailData);
  return (
    <>
      <Navbar />
      {loading && (
        <div className="h-44 flex justify-center items-center">
          <h1 className="animate-spin text-xl ">
            <i className="fa-solid fa-gear"></i>
          </h1>
        </div>
      )}
      <div className="w-full h-screen text-blue-900 flex flex-col justify-center p-5">
        <div className="grid mt-96 md:mt-0 md:grid-cols-2 w-full">
          <div
            data-aos-duration="1000"
            // data-aos-delay="50"
            data-aos="fade-right"
            className="p-10 w-fit"
          >
            <img
              src={detailData?.imgUrl}
              alt=""
              className="p-2 md:p-5 w-full h-[50vh] rounded-lg"
            />
          </div>

          <div
            data-aos-duration="1000"
            // data-aos-delay="100"
            data-aos="fade-left"
            className="p-2 md:p-5"
          >
            <h1 className="text-center p-10 text-lg font-bold">
              {detailData?.name}
            </h1>
            <p className="p-2 md:p-5">
              Stock:{" "}
              <span className="text-xl px-1 font-bold">
                {detailData?.stock}
              </span>{" "}
            </p>
            <p className="p-2 md:p-5">
              Price:
              <span className="text-xl px-1 font-bold">
                Rp. {detailData?.price}
              </span>
            </p>
            <p className="px-2 md:px-5 pt-5">Description:</p>
            <p className="p-2 md:p-5 md:text-lg">{detailData?.description}</p>
          </div>
        </div>
        <div className="w-full flex justify-center mb-10 p-10">
          <button className="p-2 md:p-5 md:text-lg rounded-md hover:bg-blue-700 transition-all duration-150 w-full md:w-[40%] bg-cyan-600 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
