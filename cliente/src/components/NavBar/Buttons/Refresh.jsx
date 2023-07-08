import React from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../../Redux/Actions";
import patita from '../../../Images/PAW-ICON.jpg'

function Refresh() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };

  return (
    <div className=" bg-amber-400 p-1 rounded-xl text-center font-bold text-gray-300 hover:bg-blue-700">
     
      <button
        className="bg-blue-700 p-1 flex justify-center items-center rounded-md"
        onClick={(e) => {
          handleClick(e);
        }}
      >
         <img
        className=" w-8 h-8 mr-1 rounded-md"
        src={patita}
      />
        Refresh
      </button>
    </div>
  );
}

export default Refresh;
