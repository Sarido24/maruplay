import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPubProducts } from "../store/products-slice";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function ProductsPage() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPubProducts());
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center text-xl p-5 bg-slate-600 uppercase space-y-10 text-white">All Products</h1>
      <div className="grid  lg:grid-cols-3 gap-3 md:gap-10 p-5">
        {products?.map((el, i) => {
          return <Card props={el} key={i} />;
        })}
      </div>
    </>
  );
}
