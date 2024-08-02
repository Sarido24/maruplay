import { useDispatch, useSelector } from "react-redux";
import { addToMyCart, setOpenCartModal } from "../store/cart-slice";
import { useState } from "react";

export default function AddCartModal() {
  const dispatch = useDispatch();
  const dataModal = useSelector((state) => state.carts.chartDataModal);
  const [dataToAdd, setDataToAdd] = useState({
    quantity : 0,
    id: ""
  })
  const { imgUrl, name, stock, description, price } = dataModal;
//   const openCartModal = useSelector((state) => state.carts.openCartModal);


  function handleChangeQuantity(e){
    const value = e.target.value 
    setDataToAdd({
        ...dataToAdd,
        quantity: value,
        id : dataModal.id
    })
    
  }

//   console.log(dataToAdd)

  function handleAdd(){
    dispatch(addToMyCart(dataToAdd))
  }
  return (
    <div className="flex items-center h-[500px] md:h-screen absolute ml-0 mr-0 right-0 left-0  flex-col rounded-lg  cursor-pointer ">
      <div className="bg-blue-400 z-40 w-[80%] md:w-[40%] h-full rounded-md">
        <button
          onClick={() => {
            dispatch(setOpenCartModal(false));
          }}
          className="bg-blue-600 w-10 m-2 text-white px-4 py-2 rounded-full hover:bg-blue-500"
        >
          X
        </button>
        <div className="h-[30%] md:h-[60%] flex flex-col items-center ">
          <img src={imgUrl} alt="" className="h-full p-5 " />
        </div>
        <div className="h-[300px]  flex flex-col justify-center items-center gap-4 text-xs md:font-semibold text-slate-700">
          <h1 className="text-sm md:text-2xl text-center">{name}</h1>
          <p>Stock : {stock}</p>
          <p>Rp. {price}</p>
          <label className="cursor-pointer" htmlFor="quantity">Quantity</label>
          <input onChange={handleChangeQuantity} min={1} type="number" id="quantity" className="outline-none w-10 p-1"  />
          <button onClick={handleAdd} className="p-3 bg-blue-200 text-blue-900 rounded-md">Save</button>

        </div>
      </div>
    </div>
  );
}
