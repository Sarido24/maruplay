import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPubProducts } from "../store/products-slice";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import AddCartModal from "../components/AddCartModal";

export default function ProductsPage() {
  const openCartModal = useSelector((state) => state.carts.openCartModal);
  const dataCartModal = useSelector((state) => state.carts.chartDataModal);
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  console.log(dataCartModal);
  useEffect(() => {
    dispatch(fetchPubProducts());
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center text-xl p-5 uppercase space-y-10 font-semibold  text-blue-500">
        All Products
      </h1>

      {loading &&
       <div className="h-44 flex justify-center items-center">
        <h1 className="animate-spin text-xl "><i className="fa-solid fa-gear"></i></h1>
       </div>
       }
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 p-16 relative"
      >
        {products?.map((el, i) => {
          return <Card props={el} key={i} />;
        })}
        {openCartModal ? <AddCartModal /> : ""}
      </div>
    </>
  );
}
