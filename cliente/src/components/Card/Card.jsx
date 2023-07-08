import React from "react";
import Perrito from "../../Images/Loader.gif";

const Card = ({ name, img, temp, peso }) => {

    const mapTemp = temp?.map((e) => {
      return e.name;
    });
    const fourTemp = mapTemp?.slice(0, 4).join();


  return (
    <div className="flex flex-col justify-center items-center z-10 rounded-3xl p-[10px] m-[25px] bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-80">
      <div className="">
        <img src={img} alt={Perrito} className=" w-[300px] h-[200px] rounded-3xl"  />
      </div>
      <div className=" text-[20px] font-bold text-center underline underline-offset-1 p-2">
        <p>{name}</p>
      </div>
      <div className="text-[14px] font-bold text-center p-2 ">
        <p className="tempP">{fourTemp}</p>
      </div>
      <div className="text-[14px] font-bold text-center bg-cyan-300 p-2 rounded-xl">
        <p>Min : {peso} : Max</p>
        <p>Pounds</p>
      </div>
    </div>
  );
};

export default Card;
