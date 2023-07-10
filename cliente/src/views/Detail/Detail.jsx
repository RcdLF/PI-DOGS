import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backgroud } from "../Home/Home";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const doggy = useSelector((state) => state.detail);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/home')
  }

  console.log(doggy);

  return (
    <div
      className="relative w-[100%] h-[100%] bg-cover justify-center items-center"
      style={backgroud}
    >
      {loading ? (
        <>
          <Loading setLoading={setLoading} />{" "}
        </>
      ) : (
        <div className=" h-[100vh] flex flex-row justify-evenly items-center">
          <div className=" h-[95vh] rounded-2xl flex justify-center items-center w-[40%] bg-blue-500 p-5">
            <img
              src={doggy.image}
              alt="Image of dog not fount"
              className="rounded-3xl"
            />
          </div>
          <div className="h-[95vh] flex flex-col justify-around items-center">
            <h1 className="text-white text-3xl bg-blue-500 p-3 rounded-lg font-bold underline underline-offset-4">
              {doggy.name}
            </h1>
            <div className=" w-[100%] p-3 rounded-lg flex flex-row justify-between items-center bg-blue-500">
            <section className=" text-center bg-blue-400 p-1 rounded-md">
              <h1 className=" font-semibold text-white text-xl">Weight</h1>
              <span className=" font-light text-white text-lg">Min :{doggy.weight} : Max</span>
            </section>
            <section className="text-center bg-blue-400 p-1 rounded-md">
              <h1 className=" font-semibold text-white text-xl">Height</h1>
              <span className=" font-light text-white text-lg">Min :{doggy.height} : Max</span>
            </section>
            </div>
            <section className=" bg-blue-500 p-4 rounded-lg">
            <span className="text-white text-2xl font-semibold bg-blue-400 p-2 rounded-lg">
              Life span: {doggy.life_span}
            </span>
            </section>
            <div className="flex flex-col bg-blue-500 p-3 rounded-lg text-center">
              <h1 className=" bg-blue-400 rounded-lg p-1 text-white font-semibold">
                Temperaments :
                <span className="flex">
              {doggy.temperaments.length && doggy.temperaments.map((e) => {
                return (
                    <p> { e.name}, </p>
                )
              })}
                </span>
              </h1>
            </div>
            <div className="bg-amber-500 p-1 rounded-lg hover:bg-blue-500">
            <button 
            className=" bg-blue-500 p-2 font-bold text-white rounded-lg hover:pointer-events-auto"
            onClick={() => onClick()}>
              Go to home
            </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
