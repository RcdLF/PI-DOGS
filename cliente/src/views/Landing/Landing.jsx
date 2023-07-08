import React from "react";
import { useNavigate } from "react-router-dom";
import Land from '../../Images/Landing.png'

export default function Landing() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };

  return (
    <div className='relative h-[100vh] flex items-center justify-center'>
      <img src={Land}
        className="fixed z-0"
        alt="Image of a doggy, if you wanna see some please go to /home" />
      <div className="relative bg-amber-600 flex flex-col items-center gap-3 p-6 rounded-3xl z-10">
        <h1 className="text-center text-5xl bg-amber-500 p-3 pb-5 rounded-xl font-bold text-blue-300 sm:text-6xl">
          Welcome to my DogApp! 
        </h1>
        <p className="text-center text-1xl p-2 rounded-xl bg-amber-500 text-blue-700 font-semibold sm:text-3xl">
          Here you can see different breeds of dogs with their different
          characteristics!
        </p>
        <div className="bg-amber-500 p-1 rounded-xl sm:p-3">
        <button
          onClick={() => {
            onClick();
          }}
          className="bg-blue-800 font-bold text-blue-300 rounded-md w-24 h-10 sm:w-29 sm:h-15 md:"
        >
          GO HOME
        </button>
        </div>
      </div>
    </div>
  );
}
