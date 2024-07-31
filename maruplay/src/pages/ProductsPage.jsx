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
      <h1 className="text-center text-xl p-5 uppercase space-y-10 font-semibold  text-blue-500">
        All Products
      </h1>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="grid md:grid-cols-4 gap-10 p-16 "
      >
        {products?.map((el, i) => {
          return <Card props={el} key={i} />;
        })}
      </div>
    </>
  );
}
