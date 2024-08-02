import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPubProductsById } from "../store/products-slice";

export default function DetailPage() {
  const { id } = useParams();
  const detailData = useSelector((state) => state.products.detailProduct);
    const dispatch = useDispatch()
  // console.log(id);
  useEffect(()=>{
    dispatch(fetchPubProductsById(id))
  },[])
  console.log(detailData);
  return (
    <>
      <Navbar />
      <div className="w-full h-fit text-white flex justify-center p-5 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col w-full">
          <div className="rounded-lg">
            <img
              src={detailData?.imgUrl}
              alt=""
              className="p-5 w-full h-[50vh] rounded-lg"
            />
          </div>

          <div className="p-5">
            <h1 className="text-center p-10 text-lg font-bold">{detailData?.name}</h1>
            <p>Stock: {detailData?.stock} </p>
            <p>Price: {detailData?.description}</p>
            <p>
              Description : Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nemo, in perspiciatis ut, odio nobis porro rerum quos, iste
              iusto distinctio cumque repellat? Molestias, possimus. Aliquam
              maiores veniam labore dicta dolorum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
