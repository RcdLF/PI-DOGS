import React, { useEffect } from "react";
import Loader from "../../Images/Loader.gif";

export default function Loading({ setLoading }) {
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh] ">
      <img src={Loader} alt="Loading.." className="animate-pulse " />
      <h1 className=" text-3xl font-medium animate-bounce">Loading...</h1>
    </div>
  );
}
