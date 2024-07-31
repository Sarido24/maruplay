export default function Card({ props }) {
  const { name, imgUrl, description, price, stock, id } = props;
  return (
    <div className="flex relative flex-col border-2 border-slate-300 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer">
      <div className="h-[50%] flex flex-col items-center ">
        <img src={imgUrl} alt="" className="h-full p-2 " />
      </div>
      <div className="h-[40%] flex flex-col justify-center items-center gap-4 font-semibold text-slate-700">
        <h1 className="text-2xl text-center">{name}</h1>
        <p>Stock : {stock}</p>
        <p>Rp. {price}</p>
      </div>
      <div className="flex w-full gap-5 text-xl justify-center ">
        <button className="">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button className="">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  );
}
