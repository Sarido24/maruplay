export default function Card({ props }) {
  const { name, imgUrl, description, price, stock, id } = props;
  return (
    <div className=" p-10 flex flex-col items-center md:relative gap-4 shadow-lg h-[400px] md:h-[450px] rounded-md">
      <h1 className="text-sm font-bold h-[110px] w-full  md:text-2xl  md:font-bold">
        {name}
      </h1>

      <img className="h-[150px] md:h-[50%]" src={imgUrl} alt="" />
      <p className="text-xs md:text-sm bg-amber-800 text-white p-3 md:rounded-md md:absolute md:top-0 md:right-1">
        Rp.{price},-
      </p>
      <p className="">Available Stock : {stock}</p>
    </div>
  );
}